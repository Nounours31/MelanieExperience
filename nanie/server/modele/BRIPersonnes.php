<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/Envt/BRIEnvt.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/modele/iBRIModel.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/DB/BRIDBAccess.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/tools/BRILogger.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/tools/BRIUID.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/NLS/BRINls.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/tools/BRIError.php';

include_once $_SERVER['DOCUMENT_ROOT'] . '/nanie/server/thirdPty/PHPMailer/src/PHPMailer.php';

class BRIPersonnes extends iBRIModel {

    private $_DB = null;
    private $_logger = null;

    public function __construct($info) {
        parent::__construct($info);
        $this->_DB = new BRIDBAccess();
        $this->_logger = new BRILogger("BRIPersonnes");
    }

    public function __destruct() {

    }

    // ---------------------------------------------------------------
    // recup de tous les NOM des user en DB
    // ---------------------------------------------------------------
    public function getAllPersonnes(&$message) {
        $ret = array();
        $rc = $this->_DB->selectAsRest('select uid, nom from ' . BRIConst::DB_NOM_ListedesPersonnes);
        if (!empty($rc)) {
            for ($i = 0; $i < count($rc); $i++) {
                $oneret = array();
                $oneret['uid'] = $rc[$i]['uid'];
                $oneret['nom'] = $rc[$i]['nom'];
                array_push($ret, $oneret);
            }
        }

        if (count($ret) < 1) {
            $err = new BRIError(1, 'Pas de nom trouve en table');
        } else {
            $err = BRIError::S_OK();
            $message = json_encode($ret);
        }

        return $err;
    }

    // ---------------------------------------------------------------
    // switch passwd grace au token
    // ---------------------------------------------------------------
    public function updatePwd($args, &$message) {
        $message = '';
        $pwdtoken = '-';
        if (isset($args['tokenPwd']) && (strlen($args['tokenPwd']) > 0)) {
            $pwdtoken = $args['tokenPwd'];
        }

        $uid = -1;
        $sql = 'select uid from ' . BRIConst::DB_NOM_ListedesPersonnes . " where (token ='" . $pwdtoken . "')";
        $rc = $this->_DB->selectAsRest($sql);
        if (!empty($rc)) {
            $uid = ($rc[0]['uid']);
        }

        if ($uid > 0) {
            $pwd = md5($args['pwd']);
            $sql = 'update ' . BRIConst::DB_NOM_ListedesPersonnes . " set passwd = '" . $pwd . "'";
            $rc = $this->_DB->updateAsRest($sql);
            $message = "success";
            if ($rc === FALSE)
                $message = "failed";
        }

        $err = BRIError::S_OK();
        return $err;
    }

    // ---------------------------------------------------------------
    // recup du pwd par l'utilisation d'un token
    // ---------------------------------------------------------------
    public function sendTokenForPasswordLost($args, &$message) {
        $message = '';

        $email = $alias = $nom = '-';
        if (isset($args['nom']) && (strlen($args['nom']) > 0)) {
            $nom = $args['nom'];
            $sql = 'select uid, email from ' . BRIConst::DB_NOM_ListedesPersonnes . " where nom = '" . $nom . "'";
        } else if (isset($args['alias']) && (strlen($args['alias']) > 0)) {
            $alias = $args['alias'];
            $sql = 'select uid, email from ' . BRIConst::DB_NOM_ListedesPersonnes . " where alias = '" . $alias . "'";
        } else if (isset($args['email']) && (strlen($args['email']) > 0)) {
            $email = $args['email'];
            $sql = 'select uid, email from ' . BRIConst::DB_NOM_ListedesPersonnes . " where email = '" . $email . "'";
        }

        $uid = -1;
        $email = '';
        $rc = $this->_DB->selectAsRest($sql);
        if (!empty($rc)) {
            $uid = ($rc[0]['uid']);
            $email = ($rc[0]['email']);
        }

        if ($uid > 0) {
            $token = md5(strtotime('now'));
            $maxTime = date('Y-m-d H:i:s', strtotime("+5 minutes"));
            $sql = 'update ' . BRIConst::DB_NOM_ListedesPersonnes . " set token = '" . $token . "', validite = '" . $maxTime . "' where uid = " . $uid . "";
            $rc = $this->_DB->updateAsRest($sql);

            print_r($_SERVER);
            $uri = $_SERVER['HTTP_REFERER'] . '&recup_token=' . $token . '&mode=navigo';
            $uri = '<a href="' . $uri . '">' . $uri . '</a>';
            $mailHTML = 'Coucou, <br/>';
            $mailHTML .= 'Lien pour mettre ajour notre mot de passe: ' . $uri . '<br/>';
            $mailHTML .= 'A plus dans le bus,<br/>Nanie.';
            $rc = $this->smtpMailer('pfs@3ds.com', 'code.fages@gmail.com', 'Nanie', 'Lien pour mettre a jour notre mot de passe', $mailHTML);
            $message = "success";
            if ($rc === FALSE)
                $message = "failed";
        }

        $err = BRIError::S_OK();
        return $err;
    }

    
    
    // ---------------------------------------------------------------
    // recup du passwd ...
    // ---------------------------------------------------------------
    public function getPersonneFromUid($args, &$message) {
        $message = '';
        $retour = array();
        $sql = 'select * from ' . BRIConst::DB_NOM_ListedesPersonnes;
        $sql .= " where (uid = " . $args['uid'] . ")";
        $rc = $this->_DB->selectAsRest($sql);
        if (!empty($rc)) {
            $retour = ($rc[0]);
        }

        if (count($rc) < 1) {
            $err = new BRIError(1, 'Pas de nom trouve en table');
        } else {
            $err = BRIError::S_OK();
        }
        $message = json_encode($retour);
        return $err;
    }

    
    // ---------------------------------------------------------------
    // recup du passwd ...
    // ---------------------------------------------------------------
    public function getMd5PasswdFromMailorAlias($args, &$message) {
        $message = '';
        $sql = 'select passwd from ' . BRIConst::DB_NOM_ListedesPersonnes;
        $sql .= " where ((email ='" . $args['emailOralias'] . "') or (alias ='" . $args['emailOralias'] . "') or (nom ='" . $args['emailOralias'] . "'))";
        $rc = $this->_DB->selectAsRest($sql);
        if (!empty($rc)) {
            $message = ($rc[0]['passwd']);
        }

        if (count($rc) < 1) {
            $err = new BRIError(1, 'Pas de nom trouve en table');
        } else {
            $err = BRIError::S_OK();
        }

        return $err;
    }

    public function createUserInDB($args, &$message) {
        $message = '';

        $err = BRIError::S_OK();


        if (!isset($args['nom']) || (strlen($args['nom']) < 1)) {
            $message = "false";
            return $err;
        }
        if (!isset($args['email']) || (strlen($args['email']) < 1)) {
            $message = "false";
            return $err;
        }
        if (!isset($args['pwd']) || (strlen($args['pwd']) < 1)) {
            $message = "false";
            return $err;
        }
        $alias = "";
        if (isset($args['alias']) && (strlen($args['alias']) > 0)) {
            $alias = $args['alias'];
        }

        $testUser = '';
        BRIPersonnes::isUserExistInDB($args, $testUser);
        if (strcmp($testUser, 'true') == 0) {
            $message = "false";
            return $err;
        }

        $sql = 'insert ' . BRIConst::DB_NOM_ListedesPersonnes;
        $sql .= " set nom='" . $args['nom'] . "', email='" . $args['email'] . "', alias='" . $args['alias'] . "', passwd='" . $args['pwd'] . "', token='', validite='2020-01-01 00:00:00'";
        $rc = $this->_DB->insertAsRest($sql);
        if ($rc === FALSE)
            $message = "false";
        else
            $message = "true";

        return $err;
    }

    public function isUserExistInDB($args, &$message) {
        $message = '';

        $err = new BRIError(54, 'Nom ou email invalid');
        if (!isset($args['nom']) || (strlen($args['nom']) < 1)) {
            $message = "false";
            return $err;
        }
        if (!isset($args['email']) || (strlen($args['email']) < 1)) {
            $message = "false";
            return $err;
        }

        $sql = 'select uid from ' . BRIConst::DB_NOM_ListedesPersonnes;
        $whereClause = " where ((email ='" . $args['email'] . "') or (nom ='" . $args['nom'] . "'))";

        if (isset($args['alias']) && (strlen($args['alias']) > 0))
            $whereClause = " where ((email ='" . $args['email'] . "') or (alias ='" . $args['alias'] . "') or (nom ='" . $args['nom'] . "'))";

        $sql = $sql . $whereClause;
        $rc = $this->_DB->selectAsRest($sql);
        if (!empty($rc)) {
            $message = "true";
        } else
            $message = "false";

        $err = BRIError::S_OK();
        return $err;
    }

    public function setLogin($args, &$message) {
        $token = md5($args['emailOralias'] . date("Y.m.d-h:i:sa"));
        $maxTime = date('Y-m-d H:i:s', strtotime("+1 hour"));

        $sql = 'update ' . BRIConst::DB_NOM_ListedesPersonnes . " set token = '" . $token . "', validite ='" . $maxTime . "' ";
        $whereClause = " where ((email ='" . $args['emailOralias'] . "') or (alias ='" . $args['emailOralias'] . "') or (nom ='" . $args['emailOralias'] . "'))";

        $sql = $sql . $whereClause;
        $rc = $this->_DB->updateAsRest($sql);

        BRIPersonnes::isTokenValid($token);

        $message = $token;
        $err = BRIError::S_OK();
        return $err;
    }

    public function updateToken($token) {
        if ((!isset($token)) || (strlen($token) < 1))
            return false;

        $maxTime = date('Y-m-d H:i:s', strtotime("+1 hour"));
        $sql = 'update ' . BRIConst::DB_NOM_ListedesPersonnes . " set validite ='" . $maxTime . "' ";
        $whereClause = " where (token = '" . $token . "')";
        $sql = $sql . $whereClause;
        $rc = $this->_DB->updateAsRest($sql);
        return true;
    }

    public function isTokenValid($token) {
        if ((!isset($token)) || (strlen($token) < 1))
            return false;
        $sql = 'select uid from ' . BRIConst::DB_NOM_ListedesPersonnes . " where (token = '" . $token . "')";
        $rc = $this->_DB->selectAsRest($sql);
        if (empty($rc)) {
            return false;
        }
        return true;
    }

    function smtpMailer($to, $from, $from_name, $subject, $body) {
        $mail = new PHPMailer\PHPMailer\PHPMailer();  // Cree un nouvel objet PHPMailer
        $mail->IsSMTP(); // active SMTP
        $mail->SMTPDebug = 0;  // debogage: 1 = Erreurs et messages, 2 = messages seulement
        $mail->SMTPAuth = true;  // Authentification SMTP active
        $mail->SMTPSecure = 'ssl'; // Gmail REQUIERT Le transfert securise
        $mail->Host = BRIEnvt::SMTP_GMAIL; // 'smtp.gmail.com';
        $mail->Port = 465;
        $mail->Username = BRIEnvt::SMTP_GMAIL_USER; //'cedssections.bricolage@gmail.com';
        $mail->Password = BRIEnvt::SMTP_GMAIL_USER_PWD; //'Gilles.Collin';
        $mail->SetFrom($from, $from_name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->IsHTML(true);
        $mail->AddAddress($to);
        if (!$mail->Send()) {
            return 'Mail error: ' . $mail->ErrorInfo;
        } else {
            return true;
        }
    }

}

?>
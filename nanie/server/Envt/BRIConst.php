<?php
ini_set('error_reporting', E_ALL);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
ini_set('display_errors', 'on');


/**
 * Description of ENVT
 *
 * @author PFS
 */
class BRIConst {

    // Debug Info
    const _ALL = 1;
    const _DEBUG = 10;
    const _INFO = 50;
    const _ERROR = 75;
    const _FATAL = 99;
    
    // Contenu des message de sortie
    const _MSG_TYPE_UNDEF = 'undef';
    const _MSG_TYPE_ERROR = 'error';
    const _MSG_TYPE_ERRORNO = 'error_no';
    const _MSG_TYPE_MESSAGE = 'data';
    const _MSG_TYPE_ERRORDATA = BRIConst::_MSG_TYPE_MESSAGE;

    // Contenu des message de entree
    const MSG_IN_REQUETE = "requete";
    const MSG_IN_SERVICE_AVAILABLE_USERINITPWD = 'init_passwd';
    const MSG_IN_SERVICE_AVAILABLE_USERLOGGING = 'logging';
    // const MSG_IN_SERVICE_AVAILABLE = ['User', 'resa'];
    
    const DB_NOM_Experience = 'experience';
    const DB_NOM_ExperienceFichier = 'experience_file';
    const DB_NOM_ExperienceGenotype = 'experience_listegenotype';
    const DB_NOM_ExperienceResultats = 'experience_resultatdestests';
    const DB_NOM_ListedesInitiales = 'initialesexperience';
    const DB_NOM_ListedesMarquages = 'marquagedesexperiences';
    const DB_NOM_ListedesPersonnes = 'personnes';
    const DB_NOM_ListedesTypeExperience = 'typedetestdesexperiences';
    const DB_NOM_ListedesChromosomes = 'chromosomes';
}

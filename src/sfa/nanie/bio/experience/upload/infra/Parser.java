package sfa.nanie.bio.experience.upload.infra;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import sfa.nanie.bio.experience.upload.eArgsInfo;

public class Parser {
	private String _file2parse = null;
	private DB _db = null;
	private final java.text.SimpleDateFormat sdfDT = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	private final java.text.SimpleDateFormat sdfD = new java.text.SimpleDateFormat("yyyy-MM-dd");

	private final String experienceTableInsert="INSERT INTO experience (dateExperience, dateInsert, qui, url_graph) VALUES ";
	private final String resultatsTableInsert="INSERT INTO `resultat`(`id_experience`, `chromosome1`, `chromosome2`, `chromosome3`, `chromosome4`, `nb`, `typetest`, `dateInsert`) VALUES ";
	

	public Parser(String s) {
		_file2parse = s;
	}

	public int parse() throws Exception {
		_db = new DB();
		_db.isDriverInstalled();

		File f = new File (_file2parse);
		BufferedReader br = new BufferedReader(new FileReader (f));
		String info;

		/*
		 * Exp 2020-08-15 qui xxx url

			Pink;xx 55 student
			Pink;yy 25 student
			White;xx 85 student
			White;yy 155 student
			Pink;xx;;White;xx 124 1.5e-07
		 */
		long expId = 0;
		while ((info = br.readLine()) != null) {
			System.out.println(info);
			if (info.matches("^$"))
				continue; // commentaire

			if (info.matches("^\\s*#.*"))
				continue; // commentaire

			if (info.matches("^\\s*Exp [0-9].*")) {
				String pattern = "^\\s*Exp\\s+([0-9\\-]+)\\s+([a-zA-Z0-9]+)\\s+(.+)";
				Pattern r = Pattern.compile(pattern);

				// Now create matcher object.
				Matcher m = r.matcher(info);
				if (m.find()) {
					String DateExp = m.group(1);
					String Qui = m.group(2);
					String Image = m.group(3);

					if ((DateExp == null) || (Qui == null) || (Image == null)) {
						System.err.println("Experience sytaxe invalide: " + info);
						continue;
					}

					StringBuffer sb = new StringBuffer(experienceTableInsert);
					java.util.Date dt = new java.util.Date();			
					sb.append("('"+DateExp+"', '"+sdfDT.format(dt)+"', '"+Qui+"','"+Image+"')");
					expId = _db.insertDB(sb.toString());
					if (expId == 0) {
						System.err.println("Insert KO: " + sb.toString());
						break;
					}	
				}
				else {
					System.err.println("Experience sytaxe invalide: " + info);
					break;
				}
				continue;
			}
			else {
				if (expId == 0) {
					System.err.println("Insert KO: No ExpId -> " + info);
					break;
				}	

				// nb ';'
				// Pink;xx 55 student
				// Pink;xx;;White;xx 124 1.5e-07
				short nbPointVirgule = this.getNbPointVirgule(info);
				if ((nbPointVirgule == 1) || (nbPointVirgule == 4)) {
				}
				else {
					System.err.printf("Insert KO: pas le bon nombre de ';' %d au lieu de 1 ou 4 [%s]\n", nbPointVirgule, info);
					break;
				}

				if (nbPointVirgule == 1) {
					String pattern = "^\\s*([^;]+)\\s*;\\s*([^;]+)\\s+([0-9]+)\\s+([a-zA-Z0-9]+)$";
					Pattern r = Pattern.compile(pattern);

					// Now create matcher object.
					Matcher m = r.matcher(info);
					if (m.find()) {
						String chromo1 = m.group(1);
						String chromo2 = m.group(2);
						String nb = m.group(3);
						String test = m.group(4);
						
						if ((chromo1 == null) || (chromo2 == null) || (nb == null) || (test == null)) {
							System.err.println("Experience sytaxe invalide: " + info);
							continue;
						}
						StringBuffer sb = new StringBuffer(resultatsTableInsert);
						java.util.Date dt = new java.util.Date();			
						sb.append("('"+Long.toString(expId)+"', '"+chromo1+"', '"+chromo2+"', '-', '-', '"+nb+"', '"+test+"', '"+sdfDT.format(dt)+"')");
						expId = _db.insertDB(sb.toString());
						if (expId == 0) {
							System.err.println("Insert KO: " + sb.toString());
							break;
						}	

					}
				}
			}



		}
		return 0;
	}

	private short getNbPointVirgule(String info) {
		char c = ';';
		short rc = 0;
		
		for (int i = 0 ; i < info.length(); i++)
			if (info.charAt(i) == c)
				rc++;
		return rc;
	}

}

package sfa.nanie.bio.experience.upload;

import java.io.File;
import java.util.Hashtable;

import sfa.nanie.bio.experience.upload.infra.Parser;

public class Starter {
	private static void usage(String[] args, Hashtable<String, String> _args) throws Exception {
		for (int i = 0; i < args.length; i++) {
			switch (args[i]) {
				case "-f" : 
					if (i < (args.length - 1)) {
						File f = new File (args[i+1]);
						if (f.exists() && f.canRead())
							_args.put(eArgsInfo.NomFichier.toString(), args[i+1]);
					}
					else
						throw new Exception("Manque le path du fichier");
					break;
				
				default: 
					break;	
			}
		}
	}

	public static void main(String[] args) {
		try {
			Hashtable<String, String> _args = new Hashtable<String, String>();
			usage (args, _args);

			if (!_args.containsKey(eArgsInfo.NomFichier.toString())) {
				throw new Exception("Manque le path du fichier");
			}
			
			Parser p = new Parser (_args.get(eArgsInfo.NomFichier.toString()));
			int rc = p.parse();
			
			return;
		}
		catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		return;
	}
}


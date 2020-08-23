package sfa.nanie.bio.experience.upload;

public enum eArgsInfo {
	NomFichier ("NomFichier"),
	Date ("Date"); 

	private String _s = null;
	eArgsInfo(String s) {
		_s = s;
	}	
	
	@Override
	public String toString( ) {
		return _s;
	}
}

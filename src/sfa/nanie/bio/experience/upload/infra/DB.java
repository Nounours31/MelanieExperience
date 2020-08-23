package sfa.nanie.bio.experience.upload.infra;


import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.sql.ResultSet;


public class DB {
	private final String _nom="root"; 
	private final String _pwd=""; 
	private final String _dbName="nanie"; 
	private final String _dbPort="3306"; 
	private final String _serverIP="127.0.0.1"; 
	private final String _dbProtocol="jdbc:mysql"; 

	public DB() {
	}


	public void isDriverInstalled () throws Exception {
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
			throw ex;
		}
	}


	public long insertDB (String sql) {
		Statement stmt = null;
		ResultSet rs = null;
		Connection conn = null;
		long rc = 0;
		try {
			String ConnectString =  _dbProtocol+"://"+_serverIP+":"+_dbPort+"/"+_dbName;
			conn = DriverManager.getConnection(ConnectString, _nom, _pwd);

			stmt = conn.createStatement();
			rc = stmt.executeUpdate (sql, Statement.RETURN_GENERATED_KEYS);
			if (rc == 0) {
				throw new SQLException("Creating user failed, no rows affected.");
			}

			ResultSet generatedKeys = stmt.getGeneratedKeys();
			if (generatedKeys.next()) {
				rc = generatedKeys.getLong(1);
			}
			else {
				throw new SQLException("Creating user failed, no ID obtained.");
			}
		}
		catch (SQLException ex){
			rc = 0;
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		}
		finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e){}
			}

			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {}
			}
			rs = null;
			stmt = null;

			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {}
			}

			rs = null;
			stmt = null;
			conn = null;
		}
		return rc;
	}

	public void selectDB (String sql) {
		Statement stmt = null;
		ResultSet rs = null;
		Connection conn = null;
		try {
			String ConnectString =  _dbProtocol+"://"+_serverIP+":"+_dbPort+"/"+_dbName;
			conn = DriverManager.getConnection(ConnectString, _nom, _pwd);

			stmt = conn.createStatement();
			//			rs = stmt.executeQuery(sql);
			int rc = stmt.executeUpdate (sql, Statement.RETURN_GENERATED_KEYS);

			while (rs.next()) {
				long id = rs.getLong("ID");
				String name = rs.getString("NAME");
				BigDecimal salary = rs.getBigDecimal("SALARY");
				Timestamp createdDate = rs.getTimestamp("CREATED_DATE");
			}
		}
		catch (SQLException ex){
			// handle any errors
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		}
		finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e){}

				rs = null;
			}

			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {}
				stmt = null;
			}

			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {}
			}
		}

	}
}






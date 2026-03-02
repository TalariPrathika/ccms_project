package com.ccms;
import java.sql.*;
public class DBConnection{
    public static Connection getConnection() throws Exception{
        //this is the JDBC driver for MYSQL 
        Class.forName("com.mysql.cj.jdbc.Driver");
        //ensures 'ccms_db' matches your database name in Xampp
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/ccms_db","root","");

    }
}
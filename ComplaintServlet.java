package com.ccms;
import java.io.IOException;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/complaintServlet")
public class ComplaintServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // 1. Get Data from HTML
        String dept = request.getParameter("dept"); // From hidden input
        String issue = request.getParameter("issue"); // From select
        String desc = request.getParameter("description"); // From textarea
        
        // In a real app, you'd get the Student ID from a "Session"
        String studentId = "STUDENT_TEST_123"; 

        // 2. JDBC Connection
        String url = "jdbc:mysql://localhost:3306/ccms_db";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, "root", "");

            String sql = "INSERT INTO complaints (student_id, department, issue_type, description) VALUES (?, ?, ?, ?)";
            PreparedStatement pst = conn.prepareStatement(sql);
            pst.setString(1, studentId);
            pst.setString(2, dept);
            pst.setString(3, issue);
            pst.setString(4, desc);

            int row = pst.executeUpdate();
            if(row > 0) {
                response.sendRedirect("success.html"); // Redirect to a success page
            }
            conn.close();
        } catch (Exception e) {
            response.getWriter().println("Error: " + e.getMessage());
        }
    }
}

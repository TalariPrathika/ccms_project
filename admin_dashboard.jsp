<%@ page import="java.sql.*, com.ccms.DBConnection" %>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <style>
        .stats-row { display: flex; gap: 20px; margin: 20px; }
        .stat-box { flex: 1; padding: 20px; background: white; border-top: 5px solid #007bff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
        .count { font-size: 30px; font-weight: bold; color: #333; }
    </style>
</head>
<body>
    <div style="padding: 20px;">
        <h2>Complaints Overview</h2>
        
        <%
            int total = 0, pending = 0, resolved = 0;
            try {
                Connection conn = DBConnection.getConnection();
                // Query for Total
                ResultSet rs1 = conn.createStatement().executeQuery("SELECT COUNT(*) FROM complaints");
                if(rs1.next()) total = rs1.getInt(1);
                
                // Query for Pending
                ResultSet rs2 = conn.createStatement().executeQuery("SELECT COUNT(*) FROM complaints WHERE status='Pending'");
                if(rs2.next()) pending = rs2.getInt(1);
                
                // Query for Resolved
                ResultSet rs3 = conn.createStatement().executeQuery("SELECT COUNT(*) FROM complaints WHERE status='Resolved'");
                if(rs3.next()) resolved = rs3.getInt(1);
            } catch(Exception e) { e.printStackTrace(); }
        %>

        <div class="stats-row">
            <div class="stat-box"><h3>Total</h3><div class="count"><%= total %></div></div>
            <div class="stat-box"><h3>Pending</h3><div class="count" style="color:orange;"><%= pending %></div></div>
            <div class="stat-box"><h3>Resolved</h3><div class="count" style="color:green;"><%= resolved %></div></div>
        </div>
        
        <a href="admin_login.html">Logout</a>
    </div>
</body>
</html>
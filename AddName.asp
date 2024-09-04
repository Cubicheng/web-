<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>
<html>
<body>

<%set conn=Server.Createobject("ADODB.Connection") 
str="dsn=conn;Driver={mysqldriver};server=127.0.0.1;uid=root;pwd=123456;database=leaderboard"
conn.open(str)
name=Request.Form("name")
sql="INSERT INTO leaderboard (name)"
sql=sql & " VALUE "
sql=sql & "('" & name & "')"
conn.Execute sql 
conn.close
%>


</body>
</html>
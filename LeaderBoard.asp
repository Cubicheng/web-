<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>
<html>
    <head>
        <link rel="stylesheet" href="./css/main.css">
    </head>
<body>

<%set conn=Server.Createobject("ADODB.Connection") 
str="dsn=conn;Driver={mysqldriver};server=127.0.0.1;uid=root;pwd=123456;database=leaderboard"
conn.open(str)
score=Request.Form("score")
sql="update leaderboard set score="
sql=sql & "'" & score & "'"
sql=sql&" WHERE 1 ORDER BY id DESC LIMIT 1"
conn.Execute sql 
%>

<% set rs=Server.CreateObject("ADODB.recordset")
sql="delete from leaderboard where score is null"
rs.Open sql, conn 
sql="select name,score from leaderboard order by score desc limit 10"
rs.Open sql, conn %>

<table class="tab">
    <tr>
        <th>name</th>
        <th>score</th>
    </tr>
    <%do until rs.EOF%>
        <tr>
            <%for each x in rs.Fields%>
    
                <td>
                    <%response.Write(x.value)%>
                </td>
            
    
            <%next%>

            <%rs.MoveNext%>
        </tr>
    <%loop%>
</table>


<header class="header">
    <a href="../../MainPage.html" class="logo">Cubicheng.</a>
    <nav class="navbar">
        <a href="#" class="item" style="--id:1">Exam</a>
        <a href="#" class="active_item" style="--id:2">Leaderboard</a>
    </nav>
</header>

</body>
</html>
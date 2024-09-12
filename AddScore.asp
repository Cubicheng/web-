<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>
<html>
    <head>
        <link rel="stylesheet" href="./css/main.css">
        <script type="text/javascript" src="./js/AddScore.js"></script>
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
    conn.close
    %>

    

    
</body>
</html>
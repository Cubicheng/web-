<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001" %>
<html>
    <head>
        <link rel="stylesheet" href="./css/main.css">
        <link rel="stylesheet" href="./css/leaderboard.css">
    </head>
<body>

    <%set conn=Server.Createobject("ADODB.Connection") 
    str="dsn=conn;Driver={mysqldriver};server=127.0.0.1;uid=root;pwd=123456;database=leaderboard"
    conn.open(str)
    %>

    <% set rs=Server.CreateObject("ADODB.recordset")
    sql="delete from leaderboard where score is null or name is null"
    rs.Open sql, conn 
    sql="select name,score from leaderboard order by score desc limit 10"
    rs.Open sql, conn %>

    <fieldset>
        <legend>Leaderboard</legend>
        <table>
            <tr>
                <th>rank</th>
                <th>name</th>
                <th>score</th>
            </tr>

            <%int i=1%>
            <td><%=i%></td>
            <%i=i+1%>
            <%do until rs.EOF%>
                <tr>
                    <td><%=i%></td>
                    <%i=i+1%>
                    <%for each x in rs.Fields%>
                
                        <td>
                            <%response.Write(x.value)%>
                        </td>
                        
                
                    <%next%>

                    <%rs.MoveNext%>
                </tr>
            <%loop%>
        </table>
    </fieldset>

    <header class="header">
        <a href="../../MainPage.html" class="logo">Cubicheng.</a>
        <nav class="navbar">
            <a href="./html/exam/ExamPrepared.html" class="item" style="--id:1">Exam</a>
            <a href="./LeaderBoard.asp" class="active_item" style="--id:2">Leaderboard</a>
        </nav>
    </header>

</body>
</html>
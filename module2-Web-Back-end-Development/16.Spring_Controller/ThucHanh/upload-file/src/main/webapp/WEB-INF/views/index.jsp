<%--
  Created by IntelliJ IDEA.
  User: hathienvan
  Date: 2019-07-11
  Time: 17:05
  To change this template use File | Settings | File Templates.
--%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>index</title>

</head>
<body>
<form:form id="formUploadFile" method="POST" action="uploadOneFile" enctype="multipart/form-data" modelAttribute="myFile">
    File: <input type="file" name="multipartFile" /> <br /> <br/>
    File: <input type="file" name="multipartFile" /> <br /> <br/>
    File: <input type="file" name="multipartFile" /> <br /> <br/>
    Description: <form:input path="description"/> <br />
    <input type="submit" value="Submit" />
</form:form>


</body>
</html>

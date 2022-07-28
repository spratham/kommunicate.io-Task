function getUrlParameterValue(url, parameter) {
    if (!url) url = location.href;
    parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + parameter + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
  }
  console.log(
    getUrlParameterValue(
      "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby",
      "utm_medium"
    )
  );
  console.log(
    getUrlParameterValue(
      "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby",
      "utm_campaign"
    )
  );
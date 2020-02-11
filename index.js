// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

(function download(data, extension){
	 data =  'abc';
  extension = 'pdf';
	console.log("extension   "+extension);
	console.log("data   "+data);
    var exportedFilenmae = 'report.'+extension;
    console.log("exportedFilenmae   "+exportedFilenmae);
    var mimeType;
    if(extension ==='pdf'){
    mimeType = {type:'application/pdf;charset=utf-8'}
    } else if (extension === 'rtf'){
     mimeType = {type:'application/msword;charset=utf-8'}
    }
     else if (extension === 'csv'){
     mimeType = {type:'text/csv;charset=utf-8'}
    }else if (extension === 'xlsx'){
     mimeType = {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}
    }
    //{
  //  type: 'text/'+extension+';charset=utf-8;'
  //}
  var blob = new Blob([data], mimeType);
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {

      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilenmae);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }


	})()
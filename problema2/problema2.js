			function mifuncion()
			{

				  var X = document.getElementById("num1").value;
				  var Y = document.getElementById("num2").value;
			      if(Y==0 && X==0)
			      {
			      	Swal.fire({
				            html: '<b style="size=10px">Origem</b>',
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
			      }
			      else if(Y==0 && X!=0)
			      {
			      	Swal.fire({
				            html: '<b style="size=10px">Eixo X</b>',
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
			      }
			      else if(Y!=0 && X==0)
			      {
			      	Swal.fire({
				            html: '<b style="size=10px">Eixo Y</b>',
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
			      }
			      else if(Y>0 && X>0)
			      {
			      	Swal.fire({
				            html: '<b style="size=10px">Q1</b>',
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
			      }
			      else if(Y<0 && X>0)
			      {
			      	Swal.fire({
				            html: '<b style="size=10px">Q4</b>',
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
			      }
			      else if( Y>0 && X<0)
			      {
			      	Swal.fire({
				            html: '<b style="size=10px">Q2</b>',
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
			      }
			      else if(Y<0 && X<0)
			      {
			      	Swal.fire({
				            html: '<b style="size=10px">Q3</b>',
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
			      }
			}
			

 	function mifuncion()
			{

				var n1 = document.getElementById("num1").value;
			 	var pi = 3.14159;
			 	var x = (4/3.0) * pi * n1*n1*n1;
			 	Swal.fire({
				            html: 'VOLUME =' + x.toFixed(3),
				            padding: '1rem',
				            backdrop: true,
				            allowOutsideClick: true,
				            allowEscapeKey: true,
				            showConfirmButton: false
				          });
				      return false;
 			}

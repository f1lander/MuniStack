var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CustomersSchema = new Schema({
	"Nombre" : String,
	"Cedula" : String,
	"Fecha" : Date,
	"Telefono" : String,
	"DirFiscal" : String,
	"Distritc" : String,
	"Zona" : String,
	"Tel_Oficina" : String,
	"Apdo" : String,
	"Numero_Gis" : String,
	"Email" : String,
	"Celular" : String,
	"Fax" : String,
	"Telefono2" : String,
	"Representante" : String,
	"CedulaRepLegal" : String,
	"Parquimetro_Autorizado" : Boolean,
	"Representante_Porder_Legal" : String,
	"Cedula_Rep_Poder" : String
});

module.exports = mongoose.model('Customers', CustomersSchema);
var CustomersModel = require('../models/CustomersModel.js');

/**
 * CustomersController.js
 *
 * @description :: Server-side logic for managing Customerss.
 */
module.exports = {

    /**
     * CustomersController.list()
     */
    list: function(req, res) {
        CustomersModel.find(function(err, Customerss){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Customers.'
                });
            }
            return res.json(Customerss);
        });
    },

    /**
     * CustomersController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        CustomersModel.findOne({_id: id}, function(err, customer){
            if(err) {
                return res.json(500, {
                    message: 'Error getting customer.'
                });
            }
            if(!Customers) {
                return res.json(404, {
                    message: 'No such customer'
                });
            }
            return res.json(customer);
        });
    },

    /**
     * CustomersController.create()
     */
    create: function(req, res) {
        var Customers = new CustomersModel({
			Nombre : req.body.Nombre,
			Cedula : req.body.Cedula,
			Fecha : req.body.Fecha,
			Telefono : req.body.Telefono,
			DirFiscal : req.body.DirFiscal,
			Distrito : req.body.Distrito,
			Zona : req.body.Zona,
			TelOficina : req.body.TelOficina,
			Apdo : req.body.Apdo,
			Numero_Gis : req.body.Numero_Gis,
			Email : req.body.Email,
			Celular : req.body.Celular,
			Fax : req.body.Fax,
			Telefono2 : req.body.Telefono2,
			Representante : req.body.Representante,
			Cedula_Rep_Legal : req.body.Cedula_Rep_Legal,
			Parquimetro_Autorizado : req.body.Parquimetro_Autorizado,
			Representante_Porder_Legal : req.body.Representante_Porder_Legal,
			Cedula_Rep_Poder : req.body.Cedula_Rep_Poder
        });

        Customers.save(function(err, customer){
            if(err) {
                return res.json(500, {
                    message: 'Error saving customer',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: customer._id
            });
        });
    },

    /**
     * CustomersController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        CustomersModel.findOne({_id: id}, function(err, customer){
            if(err) {
                return res.json(500, {
                    message: 'Error saving customer',
                    error: err
                });
            }
            if(!customer) {
                return res.json(404, {
                    message: 'No such customer'
                });
            }

            customer.Nombre =  req.body.Nombre ? req.body.Nombre : customer.Nombre;
			customer.Cedula =  req.body.Cedula ? req.body.Cedula : customer.Cedula;
			customer.Fecha =  req.body.Fecha ? req.body.Fecha : customer.Fecha;
			customer.Telefono =  req.body.Telefono ? req.body.Telefono : customer.Telefono;
			customer.Dir_Fiscal =  req.body.Dir_Fiscal ? req.body.Dir_Fiscal : customer.Dir_Fiscal;
			customer.Distrito =  req.body.Distrito ? req.body.Distrito : customer.Distrito;
			customer.Zona =  req.body.Zona ? req.body.Zona : customer.Zona;
			customer.Tel_Oficina =  req.body.Tel_Oficina ? req.body.Tel_Oficina : customer.Tel_Oficina;
			customer.Apdo =  req.body.Apdo ? req.body.Apdo : customer.Apdo;
			customer.Numero_Gis =  req.body.Numero_Gis ? req.body.Numero_Gis : customer.Numero_Gis;
			customer.Email =  req.body.Email ? req.body.Email : customer.Email;
			customer.Celular =  req.body.Celular ? req.body.Celular : customer.Celular;
			customer.Fax =  req.body.Fax ? req.body.Fax : customer.Fax;
			customer.Telefono2 =  req.body.Telefono2 ? req.body.Telefono2 : customer.Telefono2;
			customer.Representante =  req.body.Representante ? req.body.Representante : customer.Representante;
			customer.Cedula_Rep_Legal =  req.body.Cedula_Rep_Legal ? req.body.Cedula_Rep_Legal : customer.Cedula_Rep_Legal;
			customer.Parquimetro_Autorizado =  req.body.Parquimetro_Autorizado ? req.body.Parquimetro_Autorizado : customer.Parquimetro_Autorizado;
			customer.Representante_Porder_Legal =  req.body.Representante_Porder_Legal ? req.body.Representante_Porder_Legal : customer.Representante_Porder_Legal;
			customer.Cedula_Rep_Poder =  req.body.Cedula_Rep_Poder ? req.body.Cedula_Rep_Poder : customer.Cedula_Rep_Poder;
			
            customer.save(function(err, customer){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting customer.'
                    });
                }
                if(!customer) {
                    return res.json(404, {
                        message: 'No such customer'
                    });
                }
                return res.json(customer);
            });
        });
    },

    /**
     * CustomersController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        CustomersModel.findByIdAndRemove(id, function(err, Customers){
            if(err) {
                return res.json(500, {
                    message: 'Error getting Customers.'
                });
            }
            return res.json(Customers);
        });
    }
};
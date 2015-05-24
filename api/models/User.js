var User={
	// Enforce model schema in the case of schemaless databases
	schema:true,

	attributes:{
		username:{
			type:'string',
			unique: true
		},
		email:{
			type:'email',
			unique:true
		},
		state:{
			type:'string',
			enum:['pending','approved','denied']
		},
		realname:{
			type:'string'
		},
		superuser:{
			type:'boolean'
		},
		passports:{
			collection:'Passport',
			via:'user'
		}
	}
};

module.exports=User;

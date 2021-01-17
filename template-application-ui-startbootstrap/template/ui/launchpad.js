/*
 * Copyright (c) 2010-2021 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

exports.getSources = function(parameters) {

	var sources = [{
		location: "/template-application-ui-startbootstrap/index.html.template", 
		action: "generate",
		rename: "index.html",
	}, {
		location: "/template-application-ui-startbootstrap/css/styles.css.template", 
		action: "copy",
		rename: "css/styles.css"
	}, {
		location: "/template-application-ui-startbootstrap/js/scripts.js.template", 
		action: "copy",
		rename: "js/scripts.js"
	}, {
		location: "/template-application-ui-startbootstrap/home.html.template", 
		action: "generate",
		rename: "home.html",
	}, {
		location: "/template-application-ui-startbootstrap/tables.html.template", 
		action: "generate",
		rename: "tables.html",
	}];
    
    return sources;
};

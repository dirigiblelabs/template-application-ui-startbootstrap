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

var restTemplateManager = require("template-application-rest/template/template");
var uiTemplate = require("template-application-ui-startbootstrap/template/ui/template");


exports.getTemplate = function (parameters) {
    let restTemplate = restTemplateManager.getTemplate(parameters);

    let templateSources = [];
    templateSources = templateSources.concat(restTemplate.sources);
    templateSources = templateSources.concat(uiTemplate.getSources(parameters));

    let templateParameters = getTemplateParameters();
    templateParameters = templateParameters.concat(restTemplate.parameters);

    return {
        name: "Application - UI based on Start Bootstrap (AngularJS)",
        description: "Application based on Start Bootstrap with UI, REST APIs and DAOs",
        extension: "model",
        sources: templateSources,
        parameters: templateParameters
    };
};

function getTemplateParameters() {
    return [
        {
            name: "extensionName",
            label: "Extension",
            placeholder: "Extension name"
        },
        {
            name: "brand",
            label: "Brand",
            placeholder: "Brand"
        }
    ];
}
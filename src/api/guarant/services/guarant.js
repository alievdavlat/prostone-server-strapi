'use strict';

/**
 * guarant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guarant.guarant');

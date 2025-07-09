/**
 * `homepage-populate` middleware
 */

import type { Core } from '@strapi/strapi';


const populate = {
  heading: true,
  cardGrid: {
    populate: {
      cards: {
        populate: {
          image: { fields: ['alternativeText', 'url'] },
          icon: { fields: ['alternativeText', 'url'] }
        }

      }
    }
  }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In homepage-populate middleware.');
    ctx.query.populate = populate;
    await next();
  };
};

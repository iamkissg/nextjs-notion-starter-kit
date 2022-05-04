import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '79d0305d5b4d4306a3ba3462c3bef3d6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '一生所爱•小酒馆',
  domain: 'pub.lifelonglove.cn',
  author: '赵喧典',

  // open graph metadata (optional)
  description: '晚来天欲雪，能饮一杯无',

  // social usernames (optional)
  twitter: 'iamkissg',
  github: 'iamkissg',
  linkedin: null,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '关于我',
      pageId: '7cf3220fc1b5432db4deb5a701088e56'
    },
    {
      title: '我的近况',
      pageId: '92860c53941749f4ab6b9e980513a366'
    }
  ]
})

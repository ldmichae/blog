import type { GithubConfig, Link, PostConfig, Project, ProjectConfig, Site, SocialLink, TagsConfig } from '~/types'

export const SITE: Site = {
  title: 'Logan Michaels',
  description: 'Sometimes I write things here.',
  website: 'https://litos.vercel.app/',
  base: '/',
  author: 'ldmichae',
  ogImage: '/og-image.jpg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
]

export const FOOTER_LINKS: Link[] = []

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/ldmichae',
    icon: 'icon-[ri--github-fill]',
  },
]

/**
 * GitHub Configuration
 *
 * @property {boolean} ENABLED
 * @property {string} GITHUB_USERNAME
 * @property {boolean} TOOLTIP_ENABLED
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'ldmichae',
  TOOLTIP_ENABLED: true,
}

export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Dnzzk2',
  introduce: 'Here, I will share the usage instructions for this theme to help you quickly use it.',
  author: 'Dnzzk2',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  defaultHeroImage: '/og-image.jpg',
  defaultHeroImageAspectRatio: '16/9',
  postType: 'horizontal',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: "Stuff I've been cooking up.",
  introduce: "Stuff I've been cooking up.",
}

// get icon https://icon-sets.iconify.design/
export const ProjectList: Project[] = [
  {
    name: 'HiJo',
    description: 'GPS computer project based on a NRF52840.',
    githubUrl: 'https://github.com/ldmichae/hijo',
    website: undefined,
    type: 'image',
    icon: '/projects/logo.png',
  },
]

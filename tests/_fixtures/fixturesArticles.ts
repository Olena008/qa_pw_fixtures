import { test as base } from '@playwright/test';
import { Logger } from '../../src/common/logger/Logger';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { ViewArticlePage } from '../../src/ui/pages/article/ViewArticlePage';
import { EditArticlePage } from '../../src/ui/pages/article/EditArticlePage';

export const test = base.extend<{
  logger: Logger;
  createArticlePage: CreateArticlePage;
  viewArticlePage: ViewArticlePage;
  editArticlePage: EditArticlePage;
  articleWithoutTags: any;
  articleWithOneTag: any;
  articleWithTwoTags: any;
}>({
  logger: async ({}, use) => {
    const logger = new Logger('info');
    await use(logger);
  },

  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },

  viewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new ViewArticlePage(page);

    await use(viewArticlePage);
  },

  editArticlePage: async ({ page }, use) => {
    const editArticlePage = new EditArticlePage(page);

    await use(editArticlePage);
  },

  articleWithoutTags: async ({ logger }, use) => {
    const articleWithoutTags = generateNewArticleData();

    logger.debug(
      `Generated article: ${JSON.stringify(articleWithoutTags, null, 2)}`,
    );

    await use(articleWithoutTags);
  },

  articleWithOneTag: async ({ logger }, use) => {
    const articleWithOneTag = generateNewArticleData(1);

    logger.debug(
      `Generated article: ${JSON.stringify(articleWithOneTag, null, 2)}`,
    );

    await use(articleWithOneTag);
  },

  articleWithTwoTags: async ({ logger }, use) => {
    const articleWithTwoTags = generateNewArticleData(2);

    logger.debug(
      `Generated article: ${JSON.stringify(articleWithTwoTags, null, 2)}`,
    );

    await use(articleWithTwoTags);
  },
});

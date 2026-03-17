import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';
import { test } from '../_fixtures/fixtures';

test.beforeEach(async ({ user, page, homePage }) => {
  await signUpUser(page, user);
  await homePage.clickNewArticleLink();
});

test.describe('Add the tag for the existing article', () => {
  test('Add the tag for the existing article without tags', async ({
    page,
    editArticlePage,
    viewArticlePage,
    articleWithoutTags,
  }) => {
    await createNewArticle(page, articleWithoutTags);
    await editArticlePage.clickEditArticle();
    await editArticlePage.editArticleField(page, 'tagsField', 'new');
    await viewArticlePage.assertTagsAreVisible(['new']);
  });

  test('Add the tag for the existing article with tags', async ({
    page,
    editArticlePage,
    viewArticlePage,
    articleWithTwoTags,
  }) => {
    await createNewArticle(page, articleWithTwoTags);
    await editArticlePage.clickEditArticle();
    await editArticlePage.editArticleField(page, 'tagsField', 'new');
    await viewArticlePage.assertTagsAreVisible([
      ...articleWithTwoTags.tags,
      'new',
    ]);
  });
});

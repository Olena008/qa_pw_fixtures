import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';
import { test } from '../_fixtures/fixtures';

let updatedArticle;

test.beforeEach(
  async ({ user, page, homePage, editArticlePage, articleWithoutTags }) => {
    await signUpUser(page, user);
    await homePage.clickNewArticleLink();
    await createNewArticle(page, articleWithoutTags);
    await editArticlePage.clickEditArticle();
    updatedArticle = articleWithoutTags;
  },
);

test.describe('Edit fields of the existing article', () => {
  test('Edit the title for the existing article', async ({
    page,
    editArticlePage,
    viewArticlePage,
  }) => {
    await editArticlePage.editArticleField(
      page,
      'titleField',
      updatedArticle.title,
    );
    await page.reload({ waitUntil: 'commit' });
    await viewArticlePage.assertArticleTitleIsVisible(updatedArticle.title);
  });

  test('Edit the text for the existing article', async ({
    page,
    editArticlePage,
    viewArticlePage,
  }) => {
    await editArticlePage.editArticleField(
      page,
      'textField',
      updatedArticle.text,
    );
    await page.reload({ waitUntil: 'commit' });
    await viewArticlePage.assertArticleTextIsVisible(updatedArticle.text);
  });

  test('Edit the description for the existing article', async ({
    page,
    editArticlePage,
    viewArticlePage,
  }) => {
    await editArticlePage.editArticleField(
      page,
      'descriptionField',
      updatedArticle.description,
    );
    await page.reload({ waitUntil: 'commit' });
    await viewArticlePage.assertArticleDescriptiontIsVisible(
      updatedArticle.description,
    );
  });
});

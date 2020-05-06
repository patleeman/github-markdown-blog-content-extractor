/**
 * Fetch all the content from a repository.
 * @param {String} repo namespace/repository-name
 * @param {String} contentFolder path/to/markdown/files
 */
async function getBlogPosts(repo, contentFolder = "") {
  if (!repo) throw new Error("Repo not provided");
  const GITHUB_API = `https://api.github.com/repos/${repo}/contents/${contentFolder}`;
  const blogPosts = [];
  try {
    const response = await fetch(GITHUB_API);
    const data = await response.json();
    data.map((file) => {
      blogPosts.push(fetch(file.download_url).then((r) => r.text()));
    });
    return await Promise.all(blogPosts);
  } catch (e) {
    throw new Error("Error while fetching content");
  }
}

exports.default = getBlogPosts;

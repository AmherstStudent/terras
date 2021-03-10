import { getAllPostsSlugs, getAllPageSlugs } from '../../components/util'
const Sitemap = async (req, res) => {
  const postSlugs: Array<string> = await getAllPostsSlugs()
  const pageSlugs: Array<string> = await getAllPageSlugs()

  const urlSet = postSlugs
    .concat(pageSlugs)
    .map(url => {
      const route = url === '/index' ? '' : url
      return `<url><loc>https://amherststudent.com${route}</loc></url>`
    })
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`
  // set response content header to xml
  res.setHeader('Content-Type', 'text/xml')
  // write the sitemap
  res.write(sitemap)
  res.end()
}

export default Sitemap

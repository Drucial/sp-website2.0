import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'cbl6g25t', // no need to obscure
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2022-07-20',
})

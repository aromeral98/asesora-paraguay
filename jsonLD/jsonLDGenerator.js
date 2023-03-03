import { jsonLDTypes } from '../jsonLD/types/jsonLDTypes'

export const jsonLDGenerator = (path = '') => {
  const transformedPath = path?.split('/')?.[1] || ''
  // Add necessary fragments on each page
    const JSONLDFragments = jsonLDTypes?.['organization']
    if (JSONLDFragments?.length < 2 && transformedPath) {
      jsonLDTypes?.[transformedPath]?.forEach(fragment => {
        JSONLDFragments.push(fragment)
      })
    }
    return JSONLDFragments
}
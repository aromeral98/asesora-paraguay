import { jsonLDTypes } from './types/jsonLdTypes'

export const jsonLDGenerator = (path = 'freelance') => {
  // Add necessary fragments on each page
    const JSONLDFragments = jsonLDTypes?.[0]?.['organization']
    if(JSONLDFragments?.length < 2){
      jsonLDTypes?.[0]?.[path]?.forEach(fragment => {
        JSONLDFragments.push(fragment)
      })
    }
   
    return JSONLDFragments
}
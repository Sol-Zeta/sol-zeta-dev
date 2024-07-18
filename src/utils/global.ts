import { GistCard } from "@/components/GithubCard";
// import { getGist, getGists, getMyGithubUser } from "@/http/services/github";

export const env = (key: string) => process.env[key];

// export const getServerSideGists  = async (
    
//   ) => {
//     const user = await getMyGithubUser();
//     const raw_gists = await getGists();
//     const gists: GistCard[] = [];
  
//     if (!raw_gists?.length) {
//       return {
//         props: {
//           data: {},
//         },
//       };
//     }
  
//     for (let i = 0; i < raw_gists.length; i++) {
//       const filesObject = raw_gists[i].files;
//       for (const key in filesObject) {
//         if (Object.prototype.hasOwnProperty.call(filesObject, key)) {
//           if(!key.includes('fragment')) continue;
//           const gist: GistCard = {
//             description: raw_gists[i].description,
//             url: raw_gists[i].html_url,
//             creationDate: raw_gists[i].created_at,
//             code: filesObject[key].raw_url
//           };
//           gists.push(gist);
//         }
//       }
//     }
  
//     const gistsCode = await Promise.all(gists.map(gist => getGist(gist.code)))
  
//     for (let i = 0; i < gists.length; i++) {
//       gists[i].code = gistsCode[i]
//     }
  
//     return {
//       props: {
//         data: {
//           user,
//           gists,
//         },
//       },
//     };
//   };

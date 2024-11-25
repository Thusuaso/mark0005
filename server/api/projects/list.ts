import api from '~/sql/api';
export default defineEventHandler(async (event) => {
    return new Promise(async (resolve, reject) => {
		const sql = `
			select 

		mcp.ID,
		mcp.ProjectName,
		mcp.CountryId,
		mcp.CountryName,
		mcp.Image,
		mcp.Queue,
		mcp.ProjectName_Fr,
		mcp.ProjectName_Es,
		mcp.ProjectName_Ru,
		mcp.ProjectName_Ar,
		mcp.CountryName_Fr,
		mcp.CountryName_Es,
		mcp.CountryName_Ru,
		mcp.CountryName_Ar,
		(TRIM('/projects/detail/' + LOWER(REPLACE(RTRIM(mcp.ProjectName),' ','-')) +'/'+ TRIM(STR(mcp.ID)))) as Link
		from MekmarCom_Projects mcp 
		order by mcp.Queue
		`;
        (await api).query(sql, (err: any, projects: any) => {
            resolve(projects.recordset);
        })
    });

    
})
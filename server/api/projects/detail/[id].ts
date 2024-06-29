import api from '~/sql/api';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event,'id');
    const photosSql = `
        select 

	mpd.ID,
	mpd.ProjectId,
	mpd.ProductName,
	mpd.ImageLink,
	mpd.Queue,
	mpd.ImageName,
	mpd.ProductName_Fr,
	mpd.ProductName_Es,
	mpd.ProductName_Ru

from MekmarCom_Project_Detail mpd
where mpd.ImageStatus=1 and mpd.ProjectId='${id}'
order by mpd.Queue
    `;
    const videoSql = `
        select 

	mpd.ID,
	mpd.ProjectId,
	mpd.ProductName,
	mpd.ProductName,
	mpd.ProductName_Fr,
	mpd.ProductName_Es,
	mpd.ProductName_Ru,
	mpd.VideosLink

from MekmarCom_Project_Detail mpd
where mpd.VideosStatus=1 and mpd.ProjectId='${id}'
order by mpd.Queue
    `;
    const descriptionSql = `
select 
top 1
	mpi.ID,
	mpi.ProjectId,
	mpi.ProjectInformation,
	mpi.ProjectProductName,
	mpi.ProjectInformation_Fr,
	mpi.ProjectInformation_Es,
	mpi.ProjectInformation_Ru,
	mpi.ProjectInformation_Ar,
	mp.ProjectName,
	mp.ProjectName_Fr,
	mp.ProjectName_Es,
	mp.ProjectName_Ru,
	mp.ProjectName_Ar,
	mp.CountryName,
	mp.CountryName_Fr,
	mp.CountryName_Es,
	mp.CountryName_Ru,
	mp.CountryName_Ar

from MekmarCom_Projects_Information mpi
inner join MekmarCom_Projects mp on mp.ID = mpi.ProjectId
where mpi.ProjectId='${id}'
    `;
    const suggestedSql = `
    select 

	mps.ID,
	mps.ProjectId,
	mps.SuggestedId,
	mp.ProjectName,
	mp.ProjectName_Fr,
	mp.ProjectName_Es,
	mp.ProjectName_Ru,
	mp.ProjectName_Ar,
	mp.CountryName,
	mp.CountryName_Fr,
	mp.CountryName_Es,
	mp.CountryName_Ru,
	mp.CountryName_Ar,
	mp.Image,
	(TRIM('/project/detail/' + LOWER(REPLACE(RTRIM(mp.ProjectName),' ','-')) +'/'+ TRIM(STR(mp.ID)))) as Link


from MekmarCom_Projects_Suggested mps
inner join MekmarCom_Projects mp on mp.ID = mps.SuggestedId
where mps.ProjectId = '${id}'
    `;

    return new Promise(async (resolve, reject) => {

        (await api).query(photosSql, async (err, photos) => {
            (await api).query(videoSql, async (err, video) => {
                (await api).query(descriptionSql, async (err, description) => {
                    (await api).query(suggestedSql, async (err, suggested) => {
                        const data = {
                            'photos': photos?.recordset,
                            'video': video?.recordset,
                            'description': description?.recordset,
                            'suggested': suggested?.recordset
                        };
                        resolve(data);
                    });
                });
            });
        });
    });
});
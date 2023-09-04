import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

Homepage.propTypes = {};

function Homepage(props) {
  const itemData = [
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc9gxUaV-Gza74FxkHvTy-9aI_FtPE14MsFC-rM3U5HGcdecy-2swbYRPQac850Ztu2hnrvkQSz49CuGZAU7djWJihRoR-YQZfkW08P1mJ9vNR6LyXPCbsKXDot_1lToTpU4Mh15ccsej7ygmHuwpcvv=w604-h907-s-no?authuser=0",
      title: "street-1",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_ImtShqGsWpWbw7J5lvDSggUUnl7iwUFRKHHpgh-Wnr4JlowAQ6L76h2COUiC_0XZWK-_-R0kXY98zMeVxd9BGxQ77-EMYh3XG178kWGz6fxEJmjLzBYuE6tNAWiFhOAlvC3CszV7LngRcjExYJEr9=w604-h907-s-no?authuser=0",
      title: "street-2",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8BYVipVnFeZCk0M_jM8NyXL4-izzF9_R51W8OkBC_sT3DM7QS5fHDUlA0fYHHK56xSZxy5tGFKk74WnB4XGlcP1N8abTUIkelnPwgHSki3gjex2x1uzdAn8ilZa3YdL9H0mNZBLzeRZhX60saKPCGI=w604-h907-s-no?authuser=0",
      title: "bana-1",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_9CRRQpgoOoWYmVfkuB9eAkTsbEoGFcNGWkfAis_ctrtIDm-1z464gOsXDqJ3KNGi4-PXMwPJwjCcOuL0FdM1bBKBxbkR7et86UZ9kxSScRVWUngIX9xo2lZev6lMedQNMO2q2p1hovxd4KzCGd5Ds=w604-h907-s-no?authuser=0",
      title: "bana-2",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_9CRRQpgoOoWYmVfkuB9eAkTsbEoGFcNGWkfAis_ctrtIDm-1z464gOsXDqJ3KNGi4-PXMwPJwjCcOuL0FdM1bBKBxbkR7et86UZ9kxSScRVWUngIX9xo2lZev6lMedQNMO2q2p1hovxd4KzCGd5Ds=w604-h907-s-no?authuser=0",
      title: "bana-3",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-E1A7oUM-xvbLtik_ghBKNwCsYxNbDPcg7wZDWNNfj9TlwssopQeZrykgWxu5I5M7kn9LM0YqeySxpUBma4xelXbAcXxEddsArskzQP5sS9V0sgXF36OsQs776oAWiuZghWIADLWvJe-__yhLFObB3=w604-h907-s-no?authuser=0",
      title: "bana-4",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8_kOyA7vXpaIWVfqaG2bxetIsMxDAVVR1nj2z4ZorPrawVylPVgh-QrvUq-FKQ56yut_JwPFi__1RFKRI23iNhQVs99-pHUNNgdfy51PEWHspD1Pr0DHY1w1lYg5rStt2xZfLbvbF1tftd16qOZNAe=w604-h907-s-no?authuser=0",
      title: "bana-5",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8C9Sre6Ie9lv8XodQ2-jhANNCgi_5H1Jd-G7gKxWJWO3buli2D2r_nr-5n1quVnxUB3dveST78HJbdX6uMrp0Q65ui3GdjDqQti06cCaJodWEsS4Urh3Eo3YHv3YTNXpv_5DINcZ2ymm7G9_oZ3SF7=w1360-h907-s-no?authuser=0",
      title: "bana-6",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_nYlRkgFNp9D2O5OITU___I-sDiL9r1_TsEm1lGt1cUZVYTZvrLNYinCFx_jO86Yi0icWIqCyG3lIgHC-1bpXlGELiG22k74-Ni6gT5KaEreeD-mBAteUpLzFlIohvVzdOoRw1BCjq4i1_fAW4B_Nc=w1360-h907-s-no?authuser=0",
      title: "bana-7",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-hodRYfhzCLF_ddmzswdqta5KCeutO8CYfkq01PlelCCFcli6F8KWqLcQSaSAXY9crxq47YRf0__GW17_CVcUNtuZG6QXEcXruELU40PFDnUCOYAbC_myW8LxM7HBhjIX503bsCJtEwBkMhaa8rLYV=w1360-h907-s-no?authuser=0",
      title: "bana-8",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8C4L_FvNH6kSftVvhjU7lQnnrrHT4B8w0KuYCFYvaJ75hpZNy8ErcfF2thGF9xjyZjwrh_yM7SK8Q2-_id6evnGIpXXgefGlp2aN5Fp3s-HcddM_IqjMMghvVpM65perYptxp_2NdlaPvSA95nv-gk=w604-h907-s-no?authuser=0",
      title: "bana-9",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_PiaalkjtuEdgncv34eu90Ibvl0GJAwHEekKe7STuQs-mGtY6JyEUSqxDDKZdFzlCT9wVjiJj-dSNhF-ilIiarBElRBBM6D5bjONcVo-e58oT5nKQMZh5eMkeH4PaSzKlhe-MMIDzjRcbNLOOpieMb=w1360-h907-s-no?authuser=0",
      title: "bana-10",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8XhkUUmq6bNOqd7U7VPPhj1n_eKDdUtpP2tU3pyujY4W5mopQu0J1k2L5f6Nc9pYb_Fooxsj3BkiNWxl9ULmyKMMGnuznUB2v8nC0LzCsqMrQwMOCRGkxWK8GtxtIRzUw45S6rBf7qc1jLrPhsZogc=w1360-h907-s-no?authuser=0",
      title: "phim-truong-1",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc9brCsaUEU78nEk4ucW0Xa7wJvCasTyebwGVp-8JNT5gU_Ex3AGjOwY9d-1u8IV_ILCQMhJQ3DqdsmfltSReM-CsYvUvdSvZrXg17x3OHpFsdW8LGb3D5tCBTYzgJOrUGTTkzCe_MvnoHNXukBE0o7Q=w604-h907-s-no?authuser=0",
      title: "phim-truong-2",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc95D5d5lVd0Kyli_JCgY3Kzgi-2K-1S4jcyCpn1W_XzH7O1ideuxofN9Cd7ZZuqj40w2xeYiRVXrpmXf-Ah8QqB5qaKjp2Re2ircQl-zLB05yEDrlMBYsWtLMtng2J5ZGJD0VSW_twJYAz9M3qmrcLw=w1360-h907-s-no?authuser=0",
      title: "phim-truong-3",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8flyz-xZfCLBs4yByK0QiMXy-Bxm9pSwS2Y34B0nAOMO0zHwSvwsWW3jfH3DbDVuY7gX4DGM3XJYPIuxeLe3kHc3nU1MfWjO7ZeoaPKstPx4o-dSPFS2SeiViirSI4j614jhj3htS3snX8KF_kNedG=w604-h907-s-no?authuser=0",
      title: "phim-truong-4",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8JPBRQObvCT_At6gOVlcF8Hal5gR_JKMXKgp7iesg3rsRfEglPz_ravVZT_8MtIlo28beJMm2U56f5VALRANpraiPQpZMkIxEKq0jgQKFmAwZVgFy0A3dEQm4azzuTTeHF8xJ3bjYDeWoLI_M_Cxsa=w604-h907-s-no?authuser=0",
      title: "phim-truong-5",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8uxdhW_PkFzw_xIO-KNUKkenjGfh-OJkC7uxr7eORLalpS6zqLP98ScUreM4xeo-msarY5cKtihTl_0Uw6Ir1eChKMcRy9b8BeMPwO0SCFV6_GE7YDtKB_qf65Z1VG-PYEh-54OQqoe-35y0wm2YTX=w604-h907-s-no?authuser=0",
      title: "phim-truong-6",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_lS2ekfRxxkYrXF1gZPqeCmeCMI8kWBgJ6KSgU1JvWxON0PutG6HP2OGHsiEXtiB2nJ1qkgkysWnXVAWQM8Ra8hrYuMm5HGdr2HlRc2pGNkgXa2uxwnMAFlDzsKaagI211Js_6RuAABg9ZwwY2r-n7=w604-h907-s-no?authuser=0",
      title: "phim-truong-7",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_t_6W3mGlWjLNGIEupZlqo4xvAuRWYUNCLc6s8Do2uVKN5azN0Re1HKOvCYQEwHO_LArkE4QPW-PJ_d_SEehYs3DerceCoFuf_OqgM7-TJGgT4fs0kwXO5l2We8sSxmeUkrvAUm4FYaZat3pdFjVk2=w1360-h907-s-no?authuser=0",
      title: "phim-truong-8",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc9KLpS5jjvtUPWBRYZRypme-7eNd3mhozhwiI3MJRrS15khVJ98QFZ63TQdOtdijNkanT6DUxkhM8fo1qh_QDaCl9rHN0JTM8zY3f7_8sx8tUyi_oVUFVEPxuK-PA5s6StXXSHjBtsRQGNIX-mtCN6v=w1360-h907-s-no?authuser=0",
      title: "phim-truong-9",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-Ez8teydvK3rB2Dla9HH-tEPepz7GhAch451e4sHuOAY8eQ8G83cV2Jk6fqwEr47fsGWkCRg8QZ34r2ZGSd5NioS0pLFutHY4kbUVnFzHFXddrQj2aCDng4gP96EfyRXy1uSS52SnbQo6fXk-zqXr5=w604-h907-s-no?authuser=0",
      title: "phim-truong-10",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc98vHibdNtkgI2evqZnS9qwFWfljhK78waHoYiVeKBGiJ_TsLmU1dU5zUWM4By9DhGVUCUC6RMrq-nxognb9KT8mpjaJq1xOmaEcmEc4FT7h_h5Ye9BKFQmWpO2qiTZZ4BcYRsZ4qq9x6t_ksd-EwNe=w604-h907-s-no?authuser=0",
      title: "phim-truong-11",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-W9qddIM2q0kB0DSpkaJOJolNgdFmtwV2PveetdRE166t58701rF9LoFvDMH1NV65FTMTVor1UjEa-Gix4VRyCE5hTDYvLsrzAvB2hI3AuTmv5go9POs8yRHIyRqGg76ez44dv-iQI5LgLrBSuT7yD=w604-h907-s-no?authuser=0",
      title: "phim-truong-12",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-Cstac6O54-yg89uUFNEFBAnoxTet68PRLrdwk7X7PqhHv7lNgrjwqJMm1I7f8rcmzTqbUbe7mpTZ6bLdhz6YLlhSQI8JgJzvQKshL3XZPJ3R6gmz4sGRr91XrIcj2SpUJN9bBUaTfmYJC9YZ--HIr=w604-h907-s-no?authuser=0",
      title: "phim-truong-13",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc956K9nbSXwbycq0_DYktqXl2e8S6rFzn3NhuYu2rQE7S8lVZ3dfATcTujYu1D6d9u0yBy3m5gSIHeEaWi3k-WHfi7qYI2Be6ttHMe9d-d0J_vPTEfvVhO60_j0W8TtLNzorwHsLDH87IiLW6AImwoe=w1360-h907-s-no?authuser=0",
      title: "phim-truong-14",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-bOhSWtfS1YhMfyJ3_KVk6OPfXev6BQpe-SSldYHUKDUe2S9y4cwwrekkZ6tgx-Bw1nncJH3RmMlwn9pV1HCy5J4FmekDB_rHlMqvTolqt4smBYiuyAOPzRVgtn6WI7BQsTFkrgR1mh0AvC9pUt9YZ=w604-h907-s-no?authuser=0",
      title: "phim-truong-15",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_eWXKZlO2sR78z86XHTtFD2wB_Re_F94cJvc3Hh2o2OV5an99r10ifTyT-CNyztjVknV0MCCTCNnVNU8sNKXVyVlzwkgvBD2bqdKW_7RZo8-L4ywJY-EkRTm9iGocfZ6AIzA5WAxVWRRpvfDxa0eEp=w604-h907-s-no?authuser=0",
      title: "phim-truong-16",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc9M9bKpMBRZRfy_eXPtzOaZA5-L6TsTci4EhLzNANlnujCRsJpSfET7Xkm75uAiIpC3kCh_unqVN9xvLL8SHvNuiAv0Wgoy6EnYhkGDGQgPDNbmcDSxDZ15uoss6yUGKzoHWpYIjwLFS9qhcVmxa4tE=w604-h907-s-no?authuser=0",
      title: "phim-truong-17",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc-bYw1ZWIciiTawqRPujKDIvS2kB0C3kZODIm0y-QkCoJtcdUlb5dvQWvoM-IgCk-Jgbvox1r459pw6xipaUgJnqluWBjwr2tDCschgbn60b8KbPJo5xeAgPUNSy9NlpGWrbzpeFm4zueZ4pU52la-i=w604-h907-s-no?authuser=0",
      title: "phim-truong-18",
    },
    {
      img: "https://lh3.googleusercontent.com/pw/AIL4fc9imBw1lI-YRk8CWYQc4gK1e2LCxquOH3b7Pzquo2jbHMGvnOecfjHF7tg0_5ug0m3bL_QCDWpJXnNyXxjdyr5Ma-5_feIUEPo7WpVMvvIkVaaBpFn3T2TeqNKPVK9Ghu778ktZNfglJnwR1QHhy-QT=w604-h907-s-no?authuser=0",
      title: "phim-truong-19",
    },
  ];

  return (
    <Box padding={5} pt={0}>
      <Typography variant="h1" fontWeight="bold" align="center" mb={2}>
        Homepage
      </Typography>
      <Typography variant="h3">
        <span style={{ fontWeight: "bold" }}>Name:</span> Chien Le
      </Typography>
      <Typography variant="h3">
        <span style={{ fontWeight: "bold" }}>Date of birth:</span> 26/08/1997
      </Typography>
      <Typography variant="h3">
        <span style={{ fontWeight: "bold" }}>Phone:</span> 0708313527
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Typography variant="h3" mr={1} fontWeight="bold">
          Avatar:
        </Typography>
        <img
          src="https://drive.google.com/uc?id=1MeNBWqRlabo9bxtfDAh1QdbVYBEJ2iZX"
          alt="avatar-img"
          width="200px"
          height="200px"
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </Box>
      <Box mt={2}>
        <Typography variant="h3" mr={1} fontWeight="bold">
          Wedding Album:
        </Typography>
        <ImageList sx={{ width: "100%" }} variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Homepage;

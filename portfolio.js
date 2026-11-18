// ─── DATA ───────────────────────────────────────────────────────────────────
const GD = id => `https://lh3.googleusercontent.com/d/${id}`;

const listings = [
  // ── 1. Cape Coral · 9 SW 14 Ave ──────────────────────────────────────────
  {
    id: 'cape-coral-sw14',
    address: 'Cape Coral, FL',
    neighborhood: '9 SW 14th Ave',
    type: 'residential',
    typeLabel: 'Single Family',
    services: ['photos', 'drone'],
    cover: GD('1mr2WyglRHkvHkQP4CD38jduW9vyJCAD6'),
    photos: [
      { id: '1mr2WyglRHkvHkQP4CD38jduW9vyJCAD6', kind: 'hdr' },
      { id: '1Ui9wuZ90e9ujXGf5-qvDOzHotDBcoPso', kind: 'hdr' },
      { id: '1QIl-FzMH-r0860Cd_EDzhBq7v9LTuTnV', kind: 'hdr' },
      { id: '1jjgEREXG59khyolXyWsYgkmHry_OP6wa', kind: 'hdr' },
      { id: '1QTtI6YUwklu-uE4-rUAg3UJAL_I-cZ90', kind: 'hdr' },
      { id: '1zhILOHy_5rXPVl7WnFGifRHZZ24BA_Cn', kind: 'hdr' },
      { id: '1oGq7O1ly2_M2cBsm0f8a9BlFsQrUn3IL', kind: 'hdr' },
      { id: '1kWgtj5QuHde5R4FdoiPtnsumnxrPCVog', kind: 'hdr' },
      { id: '11qyNLwm2058ri0EdpeTtO6lUIqKC7S4_', kind: 'drone' },
      { id: '1xAoiRdFlpBaxYEncyplEyngjXpJSvq7p', kind: 'drone' },
      { id: '1YCNema-tQFk_B5767hM4HIpQbYpBI_RP', kind: 'drone' },
      { id: '1ua3eIN7IEQr6PbOeN-WhzVdiX9DORNHI', kind: 'drone' },
      { id: '1CtIHuL_Gbd5kGLu07P5KPDhcUjHHM6C-', kind: 'drone' },
      { id: '1JB9o5Z2bftgFprtqsj_FMtHjXPGS8X13', kind: 'drone' },
      { id: '1EeWmkNRZ2VySHsOOv4vZu92FN8OhcFT9', kind: 'drone' },
      { id: '1XbZAjNHAOTeso1aLBjb1GG15Z-nt5swc', kind: 'drone' },
    ]
  },
  // ── 2. Cape Coral · 2206 NE 35th Ln ─────────────────────────────────────
  {
    id: 'cape-coral-ne35',
    address: 'Cape Coral, FL',
    neighborhood: '2206 NE 35th Ln',
    type: 'residential', typeLabel: 'Single Family',
    services: ['photos'],
    cover: GD('15SoJ2gi4McQAFCw7Nt84OnZb-UyjVxVf'),
    photos: [
      { id: '15SoJ2gi4McQAFCw7Nt84OnZb-UyjVxVf', kind: 'hdr' },
      { id: '1J0wv_TyahzrXW4ot9SY7_HQr_H8bU090', kind: 'hdr' },
      { id: '10N6JJZcHnNK9-rxQMrkENBB-t04NKN4W', kind: 'hdr' },
      { id: '1XrNw3WAvgkfeLQZbXmaRxaInh7scml2w', kind: 'hdr' },
      { id: '1T-As9J1TaVJFROEY_97QKLyKz9ME5wzN', kind: 'hdr' },
      { id: '1eUb6FSqzeZvpcm3lZ9lZS-D3Qm0HPmUv', kind: 'hdr' },
      { id: '1BmdJtTwsF9V6EMNsno6QxpUATTy1l52X', kind: 'hdr' },
      { id: '1Mzbf8CdCyzdeqkC4nYagZjNMU1TRNvM0', kind: 'hdr' },
      { id: '1JmTgK8-__PWmt4-cBCKAm5uiC9ipNyaG', kind: 'hdr' },
      { id: '1o1p9rCWwHyBROTk3dPz8V1Oeqcg62nAc', kind: 'hdr' },
      { id: '1hUcly7vDutG3Io4yngx3ziDeyfNnrmyU', kind: 'hdr' },
      { id: '1qrFyWDqgsVN4_bMIl24arH1yxjywLjQ-', kind: 'hdr' },
      { id: '1x4NqzH6yjPC8jODbWev27F9heq-oE-gt', kind: 'hdr' },
      { id: '1TmduGlNcsl5hjI7WNhWi9OQHJa7b-hnD', kind: 'hdr' },
      { id: '1VatTpfMgBXk42hxhA5n76Szmp6_JinIE', kind: 'hdr' },
      { id: '1qm-zwWa17aM4gVvBo9vnEIITI3VIaeX5', kind: 'hdr' },
      { id: '1leT_J3n8sgo7ptwlSCEv9zIHhnzcor0I', kind: 'hdr' },
      { id: '1KA-yl2p5eW-63hP9UFX5IP6BE0co3GsB', kind: 'hdr' },
      { id: '1eBRYUuD34yVHPigkkx0XbSg9UKjKYnwV', kind: 'hdr' },
      { id: '12fIqVhnNf8ndAQuJeoDVnYP0SvbRSD4s', kind: 'hdr' },
      { id: '1AeLKYLpJ-UsPTZhgebGecXWk4uBOXBah', kind: 'hdr' },
      { id: '1bxnuYSl3WK0pMFarXp-gjgsdG9PLZbzM', kind: 'hdr' },
      { id: '1Ag6ZbT6x7aiv4w1a1G0iXEyeBU2pwf7E', kind: 'hdr' },
      { id: '1Ar8l7CaiXIUJKd2uXJ8ciuTHnMRZvqVZ', kind: 'hdr' },
    ]
  },
  // ── 3. Cape Coral · 2729 SE 5th Ter ──────────────────────────────────────
  {
    id: 'cape-coral-se5',
    address: 'Cape Coral, FL',
    neighborhood: '2729 SE 5th Ter',
    type: 'residential', typeLabel: 'Single Family',
    services: ['photos'],
    cover: GD('1FeEIL0hARDkBh9xJ38mzaU1DHWiMxkVR'),
    photos: [
      { id: '1FeEIL0hARDkBh9xJ38mzaU1DHWiMxkVR', kind: 'hdr' },
      { id: '1f_iFjAAB28OGzT0ras3t_Bq-I2_Iqbca', kind: 'hdr' },
      { id: '1nRGvcBt3v8dElxCg0BWxvrgyk15RKCo3', kind: 'hdr' },
      { id: '1VyzExweqNrgildw6trvW-beY1o9DaG6e', kind: 'hdr' },
      { id: '1KxAhKQ8PE10eKvqGjyPJupuv9eJVxBpr', kind: 'hdr' },
      { id: '1gjOpFJJ1XUqN_ec3ombA3MVD9Y83nmAh', kind: 'hdr' },
      { id: '1w9CjztsP2lBrF8LyX9f4bx38-1Thm7OQ', kind: 'hdr' },
      { id: '1CLWjiuvv0LXmJJXG_6WW_oMzIHFVHVCj', kind: 'hdr' },
      { id: '1T7KtD8pIsyU2tLOx6oBAgTWKM1vcDa8E', kind: 'hdr' },
      { id: '1ypMYc209b6chDSY-FH4_a2AzgsItMeiK', kind: 'hdr' },
      { id: '1wZWL-X47soXEH7PK6ryyaBbWyoCTi-ih', kind: 'hdr' },
      { id: '10o435vQ4QtZgmeETpHuyODWfXZGyRoUj', kind: 'hdr' },
      { id: '14cr5a1I9YKesX5EcXh_elKOMc80aQ_5H', kind: 'hdr' },
      { id: '19DjKiA8aAFbsIvVIM3lTDkNk-hdcaBBk', kind: 'hdr' },
      { id: '1XeH04t553oXkRcTZBhcRsE4HszuT4mSA', kind: 'hdr' },
      { id: '15BNp5zT5rBE5wmwaXXfwFI1O7Dh2hh7z', kind: 'hdr' },
      { id: '1DlLdceiWN1crApiLozI0jbNw6WMFBxbz', kind: 'hdr' },
      { id: '1nOJcbpQkplc-yhpeedc-befmrQjlWbR7', kind: 'hdr' },
      { id: '1sUhQzQM969c3cRfevUT343O7eqMOhoDs', kind: 'hdr' },
      { id: '1GOPDNUVa_T1joZ0wAblh5qmCnQGgFo46', kind: 'hdr' },
      { id: '1HYfxVuMbf4s2KGDWiQXNYmTXFsGLSdJv', kind: 'hdr' },
      { id: '1m8Aw3-6OgyRegwSwLHCUurSNxzz0APGj', kind: 'hdr' },
      { id: '1MTwkKl4Y7ON-zsYwsczuc2Tw6pymZ22L', kind: 'hdr' },
      { id: '1ReIqCfB1sKRPSmTajZaoEzYGAxyL_aF8', kind: 'hdr' },
      { id: '1uMH-bOesCe23x-KzD7yOM7jvwJRe1rqu', kind: 'hdr' },
      { id: '15hD7XUZR-QdiR8V8kuPRcKqCIQ82_wm_', kind: 'hdr' },
      { id: '1NJMIt3ZAoDjazleMUNW5uGh_qVdd8Tb_', kind: 'hdr' },
      { id: '18zmo6JihafOKLGalzFOrDQaMVRVJdpDM', kind: 'hdr' },
      { id: '1XBD6LyEjOPY0SQ1UKKOGsMoi5Fsjytu8', kind: 'hdr' },
      { id: '1f9EpVMP7AKJB3J-Vy_7UoqeUosYYi2oa', kind: 'hdr' },
    ]
  },
  // ── 4. Cape Coral · 2931 SW 30th St ──────────────────────────────────────
  {
    id: 'cape-coral-sw30',
    address: 'Cape Coral, FL',
    neighborhood: '2931 SW 30th St',
    type: 'residential', typeLabel: 'Single Family',
    services: ['photos', 'drone'],
    cover: GD('1fuNWBT3_-TMlypLlBFNwBanlCNcVCkZc'),
    photos: [
      { id: '1fuNWBT3_-TMlypLlBFNwBanlCNcVCkZc', kind: 'drone' },
      { id: '11uMMR-BlFbQuzJatvmFGpQtvmna0HMSl', kind: 'drone' },
      { id: '12gcP8_UwGyMnmfmR6mj5HbOmDZ2qeBIZ', kind: 'drone' },
      { id: '1TR875GS3GLFrzUQVqj4Xj1FS8SfgSvNP', kind: 'drone' },
      { id: '1IztFiVBfL-CyicMHkYg3V1fpRdYOsG7w', kind: 'drone' },
      { id: '1JkiYoNWKlRCi2AyHaA1OEuxkOoOvfNcY', kind: 'drone' },
      { id: '1ybstbSXzdHZz_UtjI9QwJjs1lllXCOd5', kind: 'drone' },
      { id: '1d216x5SLiJZprI9hjbz7eF8WxFAoJ24m', kind: 'drone' },
      { id: '1jW22yAVhzXXPCRT4If650Cw5CK30oH6n', kind: 'hdr' },
      { id: '1zQ9mscXF6HfaLYiiPC3z4wlBibQ_kZlb', kind: 'hdr' },
      { id: '1LBZ9xsX15EQfE9Tno5A-zP-LkBZdBSZo', kind: 'hdr' },
      { id: '19308VuD3-0aZZ7ARofkXushH2nYeZvIG', kind: 'hdr' },
      { id: '1FOPQVZ2CSIah72PVj-BEcuxORmRVLN7N', kind: 'hdr' },
      { id: '1YL15m4df7VWRQscKd2lRADhjs6Lyrjiw', kind: 'hdr' },
      { id: '1S6zolp79ZAOY3E0FoZI85bzlpWEM_7fL', kind: 'hdr' },
      { id: '1zWF4zskWrEzCFOFgo39o88TiilYI56tC', kind: 'hdr' },
      { id: '12RZ5TdiUdYvLSyICUZONHl4-NjXgZQ2q', kind: 'hdr' },
      { id: '16N5kn4fd_zyfKYIdq3vdTXUWJ0OFVBUU', kind: 'hdr' },
      { id: '1VMEnTonELC3XxIkJuOLCVK_BVIMf5BR1', kind: 'hdr' },
      { id: '1tx5Or2k-IGmSTP-jn5KhxvHAFVUercrq', kind: 'hdr' },
    ]
  },
  // ── 5. Cape Coral · 5405 SW 25 Ct ────────────────────────────────────────
  {
    id: 'cape-coral-sw25',
    address: 'Cape Coral, FL',
    neighborhood: '5405 SW 25th Ct',
    type: 'residential', typeLabel: 'Single Family',
    services: ['photos'],
    cover: GD('1TErBrv9-4QObcq0Tpj6TLIW25xOSEdYh'),
    photos: [
      { id: '1TErBrv9-4QObcq0Tpj6TLIW25xOSEdYh', kind: 'hdr' },
      { id: '1MvQxipl9jiRHILVlSCAFr__g4ZhmZf_H', kind: 'hdr' },
      { id: '1O6czZ4o6Hpmo0dCmh5Xr_SYrNuYz87Pp', kind: 'hdr' },
      { id: '1XvtcYffZOfhvr2QhbdT2f_7PAKjq0r_R', kind: 'hdr' },
      { id: '1J_vtL0ENqhbjc48R0MClIH38vxzE6mSR', kind: 'hdr' },
      { id: '1xirajQv_tvgdKWrB7gNwpOhYWsU2y08K', kind: 'hdr' },
      { id: '19B37HhewNf4Xw5cEXA_cX6GJLVPwmWU0', kind: 'hdr' },
      { id: '1FupySxR5UtJ0TdmHOKz3z4YrTxEgxAu7', kind: 'hdr' },
      { id: '1Tsz4lsMYmwV-TljkihNPAloLVCd-CLwM', kind: 'hdr' },
      { id: '1I08ndSkFkC8CB5ZkExWzSeNqq5B5iziy', kind: 'hdr' },
      { id: '1gcH5LzwlDtYCui89xg_JerfKVGFJI2bn', kind: 'hdr' },
      { id: '1DgeMrhJGwXNyBiybClwHRD1tZ70kH92s', kind: 'hdr' },
      { id: '1x-Gl8ifKXpZNyVRjagQQA3-pSmOGqmhs', kind: 'hdr' },
      { id: '1mz7mh4ieTnJmpulDcbNCSfi5vkMK7JAc', kind: 'hdr' },
      { id: '1B6PnCCLFZ08LPMpQI34-YLL1te6dqu50', kind: 'hdr' },
      { id: '1kr-bxa6FSY7J5NwWshs5wmnBNVY00rnp', kind: 'hdr' },
      { id: '1QHAl-PPT3Nf5fR_XQkYVJk0QPGAz-bMf', kind: 'hdr' },
      { id: '1YM-d5igNVjKj2W4niDnN_u-iPmvz1gID', kind: 'hdr' },
      { id: '1bR0WvavDh6pK0-qLn5NtTUlnfUg5FdQc', kind: 'hdr' },
      { id: '1g7fwpmOEVW6lkLbW52nB3EbOtaxdVUxy', kind: 'hdr' },
      { id: '1a2TIFnVAney0T6_fSjK84qNF9FihvF7i', kind: 'hdr' },
      { id: '1RzcfjBQgbQwgI0qOlzu_7rCuBHaO3Pq1', kind: 'hdr' },
      { id: '1n_t3d2qQI-139gl7q7g1K-g90J-_QnX5', kind: 'hdr' },
      { id: '1kh4NnNBa7AWuHgLOkiWvuUfCwi8w4nxw', kind: 'hdr' },
    ]
  },
  // ── 6. Doral · Landmark 304 ───────────────────────────────────────────────
  {
    id: 'doral-landmark-304',
    address: 'Doral, FL',
    neighborhood: 'Landmark at Doral',
    type: 'condo', typeLabel: 'Condominium',
    services: ['photos', 'drone'],
    cover: GD('1NMDn6SKBafyizdcqJqjYWakbINF_t4yS'),
    photos: [
      { id: '1NMDn6SKBafyizdcqJqjYWakbINF_t4yS', kind: 'hdr' },
      { id: '1cZpoL148bjr2TI_yz4kmn-3TP54PQS4C', kind: 'drone' },
      { id: '14CC_-y8ZtXM3t_46ldmD6ewTXfZDNL3l', kind: 'drone' },
      { id: '1MUsxAIgFVwzlvNP1pC5L-mSyS6zZ8_ej', kind: 'drone' },
      { id: '10GLbpyKRlmg_JnElhVV2oi7S7RPD2bYh', kind: 'hdr' },
      { id: '1iQXpRZlvBya_wyzQYVZv_fEMisccRePP', kind: 'hdr' },
      { id: '1HOlpeUL-xaZ1QwsKwx_oPdUiJc5j_uMq', kind: 'hdr' },
      { id: '1h3BVRaLtdLUrdQ_re2Qu8UBO7kBsRe6w', kind: 'hdr' },
      { id: '1er7KkVduni20d_EJ_ObYICUCHrnh5E5Y', kind: 'hdr' },
    ]
  },
  // ── 7. Doral · Landmark Sandra ────────────────────────────────────────────
  {
    id: 'doral-landmark-sandra',
    address: 'Doral, FL',
    neighborhood: 'Landmark at Doral',
    type: 'condo', typeLabel: 'Condominium',
    services: ['photos', 'drone'],
    cover: GD('1kWpinoS6TLy1RVKHA3Oc8oMDY_ioaM9S'),
    photos: [
      { id: '1kWpinoS6TLy1RVKHA3Oc8oMDY_ioaM9S', kind: 'hdr' },
      { id: '1QcMpwRP6f62MR1BI3OpTXqDILz_lgm-t', kind: 'hdr' },
      { id: '1T0UmRFjYYJl8sIOmVEgHzMI5_mH-aAMo', kind: 'hdr' },
      { id: '1dDnFknWMemhjuLY4DGzH4MK8APH_tKnK', kind: 'drone' },
      { id: '1VeVZe-veRIuYn2vIrsl4QeZrMQ9Gw44v', kind: 'drone' },
      { id: '1ZuN4UHautpUURNvFgtnFXNbg2kM8csAV', kind: 'drone' },
      { id: '1v44Z9Ibx6lNtsQltKeLSh_iLzrcxLTm9', kind: 'drone' },
      { id: '13cBO_Esrc13HtcViodd5lQS4ddFnbWLr', kind: 'drone' },
      { id: '1bQhtwtaYlaAeGacNCbMqa9kMkakXvpLm', kind: 'drone' },
      { id: '1FCTuQZ97NFnLvSR_RbjquxYWckct5xuD', kind: 'drone' },
      { id: '1hwP3buutxT4lAG1JvFWTZXy5Omy4m86Z', kind: 'hdr' },
      { id: '1uW7GYeI7SNYQt5LsVdjFmLzx5MKEXhdt', kind: 'hdr' },
      { id: '1fn3kR6DjOQ28dxAXkSuFMGBVCJPwkyDM', kind: 'hdr' },
      { id: '1q8ViDmv2iD5K4IGma-uChO8x5wOXATOf', kind: 'hdr' },
      { id: '1F0NtD64VE0y4kOwc8UDLn7jnZVBhNetO', kind: 'hdr' },
      { id: '1QDDQvPr_r6OWSROGy7X7vqIpVoemzqo1', kind: 'drone' },
      { id: '1H4ll9r9toqAy6s9Y9IWtUNFOB4EdJk4t', kind: 'drone' },
      { id: '1dusSwIhnqMf3Rz6G5abVmteVaFJHrD4X', kind: 'hdr' },
      { id: '1-sFJ71Nbh99AfZcfOnCxhZLuc8nGkqDT', kind: 'hdr' },
      { id: '1WnEZ-jCIG3vv3xUNc2IKWK5bI-gWCQXB', kind: 'hdr' },
      { id: '1YKxSTvgOnxssSw4TOgt2xZAh0d9cYOsh', kind: 'hdr' },
      { id: '1FdkntSdvPCpxGd89h2VcVeI3w4bA2v9h', kind: 'hdr' },
      { id: '1Tg_PvMYoDsEf8yERd5jpt2_7wBjKRV-f', kind: 'hdr' },
      { id: '1EDj84w5U04LM22CJY1eeNx4b8WmFG4VV', kind: 'hdr' },
      { id: '1CHuzwsecN4u5hijQKIO430f779as5-BH', kind: 'hdr' },
      { id: '1jHYVlzrAPIRyZz_lh-2qYEYzZqmyhO_x', kind: 'hdr' },
      { id: '1TlA5FDOhZPwApgQ0LJQdz7QXzdJEV5Ec', kind: 'hdr' },
      { id: '1PGRvSRsDG8kU1e-v5Q7xin8RJj-q_70h', kind: 'hdr' },
      { id: '1dPqCbn5essldIze1JOFWDAek4gPcIepT', kind: 'hdr' },
      { id: '1Q9_b0DwXOGO9mJye1Q15HbiX_3UiCxhN', kind: 'hdr' },
    ]
  },
  // ── 8. Doral · Warehouse ──────────────────────────────────────────────────
  {
    id: 'doral-warehouse',
    address: 'Doral, FL',
    neighborhood: 'Doral Commerce',
    type: 'commercial', typeLabel: 'Commercial',
    services: ['photos'],
    cover: GD('1ZdTpjw-eYbPCeI0m0dxcbC5FtPwJSuUd'),
    photos: [
      { id: '1ZdTpjw-eYbPCeI0m0dxcbC5FtPwJSuUd', kind: 'hdr' },
      { id: '1AteL5CM06tX5uuXlfxQAEyXcuiVB084d', kind: 'hdr' },
      { id: '1wN4XGz-HK4e5xUJKq0qSIcK5XsIMMB5V', kind: 'hdr' },
      { id: '17EL5tboMhcrlN0AMzH1KtVJ3yHrWt3zo', kind: 'hdr' },
      { id: '1UPItLsWkhIwlEI-qtB6k5OjoBqgnCr9I', kind: 'hdr' },
      { id: '1L7bk6xUqRa6-4opFLozyMjE5uMHisuB8', kind: 'hdr' },
      { id: '1UDaGiyXgRBKAVdKrMJcrwH7X8cCIFWhJ', kind: 'hdr' },
      { id: '1DwVYvbuDt0HqNYk0JA0mP5vORelTrzCM', kind: 'hdr' },
      { id: '1rRpQHlJt9ZqY3_d02p_VM0GkiUDFYA_y', kind: 'hdr' },
      { id: '1S9ZJ_-TauNCvuiG4ewI8X50ULXzDXibS', kind: 'hdr' },
    ]
  },
  // ── 9. Miami · Duplex ─────────────────────────────────────────────────────
  {
    id: 'miami-duplex',
    address: 'Miami, FL',
    neighborhood: 'Miami Duplex',
    type: 'residential', typeLabel: 'Duplex',
    services: ['photos'],
    cover: GD('1ulfN0_spdjxiKHI21hEe65_qIuKaLQfA'),
    photos: [
      { id: '1ulfN0_spdjxiKHI21hEe65_qIuKaLQfA', kind: 'hdr' },
      { id: '1VpVlCpPyrE-62V-Zix1mIF4XYKV7r6qW', kind: 'hdr' },
      { id: '1hrek08zc93chuxPpOv8iH0GlJYjG9dnF', kind: 'hdr' },
      { id: '1Hz8OSIfsZqqERBPg6FRkGKtcMlK6htv9', kind: 'hdr' },
    ]
  },
  // ── 10. Miami · 10411 SW 108th Ave ───────────────────────────────────────
  {
    id: 'miami-108th',
    address: 'Miami, FL',
    neighborhood: '10411 SW 108th Ave #251',
    type: 'condo', typeLabel: 'Condominium',
    services: ['photos'],
    cover: GD('1tlyjE3b1op9YXX1u_xLCf-r4-qirRfU_'),
    photos: [
      { id: '1tlyjE3b1op9YXX1u_xLCf-r4-qirRfU_', kind: 'hdr' },
      { id: '1-wBrcDXZBuZ5UYRv5Esf2xPd68OeBBOl', kind: 'hdr' },
      { id: '1TfMwUO_hyi53ZrJHumlh4hcGOwWGuzd2', kind: 'hdr' },
      { id: '1rxTk2aud9YN0r5FGIZ2zSG2pFg_vyBZw', kind: 'hdr' },
      { id: '1LDCNUqQyQYxUo_TpdQXh2aqSf6Du62eS', kind: 'hdr' },
      { id: '1eMx3SXwztJrpmRgdaW9rOzL1rm87Ukbg', kind: 'hdr' },
      { id: '1ujRvf2YfSmLEbMov0SuAZ2nSY021mjDE', kind: 'hdr' },
      { id: '1FiQvzVu9aEVQedeWXmzPsjwT0k44BM8H', kind: 'hdr' },
      { id: '1-TxaXEEalC_zI3PCmoiJUGXfk165nHCQ', kind: 'hdr' },
      { id: '13qIRXYp_FA5NdpEL6WNeI_kHirveu-sn', kind: 'hdr' },
      { id: '1yJn4SAwqwGdX4vbXiGT0ZtcLnm64lssZ', kind: 'hdr' },
      { id: '1afGR9DNvncr2y2uogZ9_vCgMEn_SVMqp', kind: 'hdr' },
    ]
  },
  // ── 11. Poinciana · 3554 Mayfair St ──────────────────────────────────────
  {
    id: 'poinciana-mayfair',
    address: 'Poinciana, FL',
    neighborhood: '3554 Mayfair St',
    type: 'residential', typeLabel: 'Single Family',
    services: ['photos'],
    cover: GD('1bLsXA1geKTdGSy6My60ZqCIr8pNgHyW-'),
    photos: [
      { id: '1bLsXA1geKTdGSy6My60ZqCIr8pNgHyW-', kind: 'hdr' },
      { id: '1hD4MSiSYvTNyVx_g_NFr57s1PHz1ddzF', kind: 'hdr' },
      { id: '1i4JDLa62AIPSPVDwJBTXMBEmycuL--44', kind: 'hdr' },
      { id: '1eJqjwyMJSWW3Bbtd4iaU7OScXzCziz8y', kind: 'hdr' },
      { id: '1n_3U-Y2Q-T8eYp8HjEHBKevPKCAJdrCp', kind: 'hdr' },
      { id: '1zFFXImCTUYnogSScKs1S7mFkLD6UbUIi', kind: 'hdr' },
      { id: '19FCzv1qhMo8eq4WSiQOdM6w3x4l2-gxh', kind: 'hdr' },
      { id: '1dnyCLtkBPUTgAYszsnE3ojV_bjeAE_BI', kind: 'hdr' },
      { id: '1tfqYRse6ePIvpbDo_-2CGF2ELtSk6Mex', kind: 'hdr' },
      { id: '1ANOArSPlJy_NOk5IZvEPK4HJLVfT2IqJ', kind: 'hdr' },
      { id: '1sCLVsCM1RWO_jZxjog_c7y9GDVE6vsNT', kind: 'hdr' },
      { id: '1m5OBn24ag2XDweisRqufgNNPUNBpyQ_1', kind: 'hdr' },
      { id: '1PlNSmKoN0_Z0e6ODFcS0y088zZBkQnKB', kind: 'hdr' },
    ]
  },
  // ── 12. Weston · Warehouse ────────────────────────────────────────────────
  {
    id: 'weston-warehouse',
    address: 'Weston, FL',
    neighborhood: 'Weston Commerce',
    type: 'commercial', typeLabel: 'Commercial',
    services: ['photos', 'drone'],
    cover: GD('1GyM6h6nBihqaT9_Oj9ZVHbfL5xV4lJkm'),
    photos: [
      { id: '1GyM6h6nBihqaT9_Oj9ZVHbfL5xV4lJkm', kind: 'drone' },
      { id: '1KuPc0pIcCLmZJw392rIygr--SfmTFj_c', kind: 'drone' },
      { id: '1n1MdQPtbMHTEGx3MX564c5piI_fJWwes', kind: 'drone' },
      { id: '1X12Clxv4wt-21I4v_J2e8-BOzU2lI5VK', kind: 'drone' },
      { id: '15akq-QRCASbaapa2j0MknRCJoaGWecz3', kind: 'drone' },
      { id: '1bDLmqxQKIhZqeY-097dhVS0VsYjWug_o', kind: 'hdr' },
      { id: '12at5wrzBLn37Cg6J4rBc3E8JrTmGAcnt', kind: 'hdr' },
      { id: '1r3XweU_VL5anU3_yVxWrJ5OUnwzBH_NA', kind: 'hdr' },
      { id: '1dFAQAaBm1gooRQsE2meQx7dv2fs4KC42', kind: 'hdr' },
      { id: '1ccH86_mzw4P8o5dsgKRlPTpQl50ni3tz', kind: 'hdr' },
      { id: '1SpzOSUbQ3lkxwVXPBA2cBHCH1vaPlxVK', kind: 'hdr' },
      { id: '1trbvu4Uzm-TCP2141rmN9CSISCAHBF3M', kind: 'hdr' },
    ]
  },
  // ── 13. Sienna · Gumuccio ─────────────────────────────────────────────────
  {
    id: 'sienna-gumuccio',
    address: 'South Florida',
    neighborhood: 'Sienna Community',
    type: 'luxury', typeLabel: 'Luxury Home',
    services: ['photos'],
    cover: GD('1I9-EZRNowavyxLY6qEjJnyf0ovFO31Ju'),
    photos: [
      { id: '1I9-EZRNowavyxLY6qEjJnyf0ovFO31Ju', kind: 'hdr' },
      { id: '1JSZ85Gi2ioKgXz0HsFPP3qL8kYC9ZGDw', kind: 'hdr' },
      { id: '19o_FfYhFS8DgEht8OPKSKMo1C92mwtHA', kind: 'hdr' },
      { id: '1b-l_RKrvGSi1gzxFScVehbmXvc-7XfUz', kind: 'hdr' },
      { id: '1RUos4a0D49DeHQMYYNPVol9n8zBCKRiD', kind: 'hdr' },
      { id: '11ifQfidPCTafEv8HbaE3wwMKmYKprKkh', kind: 'hdr' },
      { id: '1GZbOhWQKueXb800fJ0CsHK-l7M-ygUdV', kind: 'hdr' },
      { id: '1t_-mKr8R4nWTYM8SwXX_VxontGtNHzAk', kind: 'hdr' },
      { id: '1SZfhcxgnBDgLk70l5uw1xoEeMj39kyij', kind: 'hdr' },
      { id: '1z7hgTRhDXg3D3tU44J9C2IRPBUI3f1uq', kind: 'hdr' },
      { id: '1wZNqC0eK1UVM0In73zKCZ-mAuvg_03eb', kind: 'hdr' },
      { id: '1ZaM9kNAPgo-W-C_IxAvkSCcWb3vAjVtM', kind: 'hdr' },
      { id: '1R8Nc3D7UWp_jMVEmnW_vjV2EBWOsHHnD', kind: 'hdr' },
      { id: '1jAqH_LZNE_mkJSwdMtI4j4XvzWByGJIk', kind: 'hdr' },
      { id: '1tY8bykL5Jca-ccVAl5XsONtH58Xw9O13', kind: 'hdr' },
      { id: '1Pyxec5F8EnFmjrsIfarb7xnz1s__rzpJ', kind: 'hdr' },
      { id: '1KIvejRCBWFjVkB5wS03PcQ13xP3uOx26', kind: 'hdr' },
      { id: '1TwubHqPvkdrnWbCOnxyZHzGA59vcWcNM', kind: 'hdr' },
      { id: '16TA50bVFPSU3cA4cUAqktbI_ZCu4T7QA', kind: 'hdr' },
      { id: '1pLdScTM2_PVknTk1XBcakag6JlnowXad', kind: 'hdr' },
      { id: '1x_sh4I5l8YvXzQqr9rfa73bn030q0zKZ', kind: 'hdr' },
      { id: '12bmDsOblQbDedUPkh03tdEW5rEchp09v', kind: 'hdr' },
      { id: '1rsKg_G0vUfrglie_A3mOUhVMXQGpHTBq', kind: 'hdr' },
      { id: '1FaPJtWwvrxw7zD9HOHhui5oImcayxwec', kind: 'hdr' },
      { id: '1gfxj5y9VoRoArEPEyRk_dPQJMuoEhWjw', kind: 'hdr' },
    ]
  },
  // ── 14. Homestead · Dayana ────────────────────────────────────────────────
  {
    id: 'homestead-dayana',
    address: 'Homestead, FL',
    neighborhood: 'Homestead',
    type: 'residential', typeLabel: 'Single Family',
    services: ['photos', 'drone'],
    cover: GD('19qW7VEVVWSTY2fUwo2UK2UGIc5UJ_B_P'),
    photos: [
      { id: '19qW7VEVVWSTY2fUwo2UK2UGIc5UJ_B_P', kind: 'drone' },
      { id: '1mgn-gbDiCSdTw6eYOhLRIYYVqLumwEl2', kind: 'drone' },
      { id: '14xk7l8QY0t3nuQaDqyzAtl99BDNT1f_O', kind: 'drone' },
      { id: '1Ku1UCBUuXGDx0ZgSbhxWi8HL_ZzxFy0w', kind: 'drone' },
      { id: '1a8RlhSvhvb81ZCB4tPft0fWpCH3rYZaM', kind: 'drone' },
      { id: '1aRBpj_XLOh8jjhq0zgW-glgpdJCabXHK', kind: 'drone' },
      { id: '1skXYbUJErNbYiIgw5djSg0aCPn9Lox6u', kind: 'hdr' },
      { id: '1OTLDRK3WU9rneANiSj4oK1cdl_N0GCE0', kind: 'hdr' },
      { id: '1cFY8Hvr-eLE57axDhikaIBsyVrkC-PDD', kind: 'hdr' },
      { id: '1dZxeypfVsr9oKKr-sa-ldNj4rgZIMzKD', kind: 'hdr' },
      { id: '1mnkBS1zTgeagXeUFNnzHdRtJIln-AE-O', kind: 'hdr' },
      { id: '1Q3LBu2p75u66RxiF8epJBn_egh4Suujr', kind: 'hdr' },
      { id: '1Lx3rGSoD9wghav15mmcHDSIxneyp8MDm', kind: 'hdr' },
      { id: '1Zcc6oN10sjeyrNU04lpabSXovicGKicI', kind: 'hdr' },
      { id: '1L_TmaxbqsmnUCggMHjH8RlwG3qacER3G', kind: 'hdr' },
      { id: '1YCw8V0UNF0d65A701VsAJvNf7YuHOcp2', kind: 'hdr' },
      { id: '1jS4Qfm1m4_azxAclUgP5GbqZ425ImIiZ', kind: 'hdr' },
      { id: '1CPgzE0X5bb-Eryxy27CKNr1PXjen5Yvk', kind: 'hdr' },
      { id: '11njBi26YO-C-joO2elXsCmjYzsCbCn3I', kind: 'hdr' },
    ]
  },
  // ── 15. North Miami · Cecilia ─────────────────────────────────────────────
  {
    id: 'north-miami-cecilia',
    address: 'North Miami, FL',
    neighborhood: 'North Miami Apartment',
    type: 'condo', typeLabel: 'Apartment',
    services: ['photos'],
    cover: GD('1bkbFTnCYHW_RI5KNG4jztSW2eiWhonRX'),
    photos: [
      { id: '1bkbFTnCYHW_RI5KNG4jztSW2eiWhonRX', kind: 'hdr' },
      { id: '1XmGpxuX3iGWkC9l7EnAX7HBk4dRV0KoL', kind: 'hdr' },
      { id: '1TJTyqX38GdY0vzL8mbhbW029gAxEskAJ', kind: 'hdr' },
      { id: '1NrC4yT2X851I2xxUFB8eLX1YuuI2dJb7', kind: 'hdr' },
      { id: '1ilOVZdMDT5S3Csxl8JJ2_Pk0hNXbZHve', kind: 'hdr' },
      { id: '11vrAC3ZISQs6OKZALKYlize6sMg58AzO', kind: 'hdr' },
      { id: '1waepwdcxH_ga0xFSGaWH7XMiyUU3i7wh', kind: 'hdr' },
      { id: '1j9snXeQ0pfpYjvhphVyI82GAvYMt4yeJ', kind: 'hdr' },
      { id: '1uyjApLE0-Dv8wzCcQ3vm5M-tfG1f7XvB', kind: 'hdr' },
      { id: '1_Zcj8z3pCuB0NAxnX9U47Em-K7vSicEu', kind: 'hdr' },
      { id: '1QlMLnljXsi2Ezhl9Q1rinPT_KAL4vCg_', kind: 'hdr' },
    ]
  },
];

const serviceLabels = { photos: 'HDR', drone: 'Drone', video: 'Video', staging: 'Staging', tour: '3D Tour' };
const serviceTagClass = { photos: 'tag-hdr', drone: 'tag-drone', video: 'tag-video', staging: 'tag-staging', tour: 'tag-tour' };
const kindLabel = { hdr: 'HDR Photography', drone: 'Drone Aerial', video: 'Cinematic Video' };

// ─── RENDER GRID ────────────────────────────────────────────────────────────
const grid = document.getElementById('portfolioGrid');
const emptyState = document.getElementById('emptyState');
const visibleCount = document.getElementById('visibleCount');

function buildCards() {
  listings.forEach(l => {
    const card = document.createElement('div');
    card.className = 'listing-card reveal';
    card.dataset.id = l.id;
    card.dataset.type = l.type;
    card.dataset.services = l.services.join(',');

    const serviceTags = l.services.map(s =>
      `<span class="service-tag ${serviceTagClass[s]}">${serviceLabels[s]}</span>`
    ).join('');

    card.innerHTML = `
      <div class="card-img">
        <img src="${l.cover}" alt="${l.address}" loading="lazy">
        <div class="card-type-badge">${l.typeLabel}</div>
        <div class="card-photo-count">📷 ${l.photos.length} photos</div>
        <div class="card-overlay">
          <div class="overlay-cta">View Gallery</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-address">${l.address}</div>
        <div class="card-type-label">${l.neighborhood}</div>
        <div class="card-services">${serviceTags}</div>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(l.id));
    grid.appendChild(card);
  });

  grid.appendChild(emptyState);
  observeReveal();
}

// ─── FILTER ─────────────────────────────────────────────────────────────────
let activeService = 'all';
let activeType = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeService = btn.dataset.service;
    applyFilters();
  });
});

document.querySelectorAll('.type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeType = btn.dataset.type;
    applyFilters();
  });
});

function applyFilters() {
  let count = 0;
  document.querySelectorAll('.listing-card').forEach(card => {
    const services = card.dataset.services.split(',');
    const type = card.dataset.type;
    const matchService = activeService === 'all' || services.includes(activeService);
    const matchType = activeType === 'all' || type === activeType;
    if (matchService && matchType) {
      card.classList.remove('hidden');
      count++;
    } else {
      card.classList.add('hidden');
    }
  });
  visibleCount.textContent = count;
  emptyState.classList.toggle('show', count === 0);
}

// ─── LIGHTBOX ────────────────────────────────────────────────────────────────
let currentListing = null;
let currentIndex = 0;

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbAddress = document.getElementById('lbAddress');
const lbCounter = document.getElementById('lbCounter');
const lbTypeLabel = document.getElementById('lbTypeLabel');
const lbThumbs = document.getElementById('lbThumbs');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

function openLightbox(id) {
  currentListing = listings.find(l => l.id === id);
  currentIndex = 0;
  buildThumbs();
  showPhoto(0);
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function buildThumbs() {
  lbThumbs.innerHTML = '';
  currentListing.photos.forEach((p, i) => {
    const t = document.createElement('div');
    t.className = 'lb-thumb' + (i === 0 ? ' active' : '');
    t.innerHTML = `<img src="${GD(p.id)}" alt="" loading="lazy">`;
    t.addEventListener('click', () => showPhoto(i));
    lbThumbs.appendChild(t);
  });
}

function showPhoto(index) {
  const photo = currentListing.photos[index];
  currentIndex = index;

  lbImg.classList.add('loading');
  lbImg.onload = () => lbImg.classList.remove('loading');
  lbImg.src = GD(photo.id);

  lbAddress.textContent = `${currentListing.address} — ${currentListing.neighborhood}`;
  lbCounter.textContent = `${index + 1} / ${currentListing.photos.length}`;
  lbTypeLabel.textContent = kindLabel[photo.kind] || photo.kind.toUpperCase();

  document.querySelectorAll('.lb-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  // scroll thumb into view
  const thumbs = document.querySelectorAll('.lb-thumb');
  if (thumbs[index]) thumbs[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function prev() { showPhoto((currentIndex - 1 + currentListing.photos.length) % currentListing.photos.length); }
function next() { showPhoto((currentIndex + 1) % currentListing.photos.length); }

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prev);
lbNext.addEventListener('click', next);

lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
});


// ─── NAV SCROLL ──────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
function observeReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── INIT ────────────────────────────────────────────────────────────────────
buildCards();

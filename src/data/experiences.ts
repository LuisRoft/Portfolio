import { getI18N } from "../i18n";

export const getTimelineItems = (currentLocale: string) => {
  const i18n = getI18N({ currentLocale });

  return [
    {
      title: i18n.EXPERIENCIAS.AFIF_EXPERIENCIA_ROL,
      company: i18n.EXPERIENCIAS.AFIF_EXPERIENCIA_COMPANY,
      date: i18n.EXPERIENCIAS.AFIF_EXPERIENCIA_FECHA,
      description: i18n.EXPERIENCIAS.AFIF_EXPERIENCIA_DESC,
      recent: true,
    },
    {
      title: i18n.EXPERIENCIAS.GENESIS_EXPERIENCIA_ROL,
      company: i18n.EXPERIENCIAS.GENESIS_EXPERIENCIA_COMPANY,
      date: i18n.EXPERIENCIAS.GENESIS_EXPERIENCIA_FECHA,
      description: i18n.EXPERIENCIAS.GENESIS_EXPERIENCIA_DESC,
    },
    {
      title: i18n.EXPERIENCIAS.MANACLOUD_EXPERIENCIA_ROL,
      company: i18n.EXPERIENCIAS.MANACLOUD_EXPERIENCIA_COMPANY,
      date: i18n.EXPERIENCIAS.MANACLOUD_EXPERIENCIA_FECHA,
      description: i18n.EXPERIENCIAS.MANACLOUD_EXPERIENCIA_DESC,
    },
  ];
};

import locale from "date-fns/locale/en-US";
import { formatDistanceToNowStrict } from "date-fns";

export const getUserNameFirstLetters = (text) => {
  let name = String(text);
  let finalStr = "";
  finalStr += name[0].toUpperCase();
  const nameList = name.split(" ");
  if (nameList.length > 1) finalStr += nameList[1][0].toUpperCase();

  return finalStr;
};


/**
 * Get Times ago from date
 */
const formatDistanceLocale = {
  lessThanXSeconds: "{{count}}s",
  xSeconds: "{{count}}s",
  halfAMinute: "30s",
  lessThanXMinutes: "{{count}}m",
  xMinutes: "{{count}}m",
  aboutXHours: "{{count}}h",
  xHours: "{{count}}h",
  xDays: "{{count}}d",
  aboutXWeeks: "{{count}}w",
  xWeeks: "{{count}}w",
  aboutXMonths: "{{count}}m",
  xMonths: "{{count}}m",
  aboutXYears: "{{count}}y",
  xYears: "{{count}}y",
  overXYears: "{{count}}y",
  almostXYears: "{{count}}y",
};

function formatDistance(token, count, options) {
  options = options || {};

  const result = formatDistanceLocale[token].replace("{{count}}", count);

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
}

export const getTimeAgo = (dateStr) => {
  return formatDistanceToNowStrict(new Date(dateStr), {
    addSuffix: true,
    locale: {
      ...locale,
      formatDistance,
    },
  });
};

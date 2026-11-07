export function readmeEvidence(text) {
  const demos = [...text.matchAll(/https:\/\/[^\s)<>\]"'`]+/g)].map((m) => m[0]).filter((s) => {
    try {
      const url = new URL(s);
      if (url.username || url.password || url.search || url.hash) return false;
      return url.hostname.endsWith('.onrender.com') || url.hostname.endsWith('.helioho.st') || url.hostname === 'nguyenhonggiang2407.github.io';
    } catch { return false; }
  });
  const commands = [...text.matchAll(/^```([^\r\n]*)\r?\n([\s\S]*?)^```[ \t]*\r?$/gm)]
    .filter((m) => /^(sh|bash|shell|bat|powershell|console)?$/.test(m[1].trim()))
    .map((m) => m[2].trim()).filter((b) => /mvn|npm |pytest|unittest|php |composer|ant |python |docker|javac/.test(b));
  return { demos: [...new Set(demos)], commands };
}

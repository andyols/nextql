const childProcess = require("child_process")
const path = require("path")

// https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel
const IGNORE = 0
const BUILD = 1

const ignore = msg => {
  msg?.length && console.log(`🚫 ${msg}`)
  process.exit(IGNORE)
}
const build = msg => {
  msg?.length && console.log(`👍 ${msg}`)
  process.exit(BUILD)
}

const check = () => {
  // check for git changes to any files and get their names
  const gitChanges = childProcess
    .execSync("git diff --name-only HEAD^ HEAD")
    .toString()
    .trim()
    .split("\n")

  // find the first gitChange to match a fileToTrack
  let detected
  const filesToTrack = ["scripts/", "src/", "package.json"]
  const shouldBuild = gitChanges.some((f, i, arr) =>
    filesToTrack.some(file => {
      if (arr[i].startsWith(file)) {
        detected = file
      }
      return arr[i].startsWith(file)
    })
  )

  if (shouldBuild) {
    return build(`changes to '${detected}' detected`)
  }

  return ignore(
    `no changes to ${filesToTrack
      .map((s, i, a) => (i < a.length - 1 ? `'${s}'` : `or '${s}'`))
      .join(", ")} detected`
  )
}

check()

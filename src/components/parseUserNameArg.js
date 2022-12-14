const parseUserNameArg = () => {
  try {
    const args = process.argv.slice(2);
    if (args.length === 0) return null;
    return args.find((arg) => arg.startsWith('--username=')).split('=')[1];
  } catch {
    return null;
  }
}

export default parseUserNameArg;
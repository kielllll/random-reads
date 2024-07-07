/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'random-reads',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: {
          region: 'ap-southeast-1',
          profile:
            input?.stage === 'production' ? 'personal-prod' : 'personal-dev',
        },
      },
    }
  },
  async run() {
    new sst.aws.Nextjs('RandomReads')
  },
})

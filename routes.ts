export default (app: any, registerModel: any) => ({
  breadcrumbName: 'appCreate.breadcrumbName',
  path: 'create',

  getComponents(__: any, cb: Function) {
    Promise.all([
      System.import('./models/appCreate'),
      System.import('./containers/Create')
    ])
      .then(([model, container]) => {

        registerModel(app, model.default)
        cb(null, container.default)

      })
  }

})

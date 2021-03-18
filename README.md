[![18F](https://circleci.com/gh/18F/formservice-hud903.svg?style=svg)](https://app.circleci.com/pipelines/github/18F/formservice-hud903)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

For deploying to S3 and CloudFront: [https://wolovim.medium.com/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af](https://wolovim.medium.com/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)

#### *Deploy to Cloud.gov*

If not logged in, do the below (https://cloud.gov/docs/getting-started/setup/)
cf login -a api.fr.cloud.gov  --sso
Navigate to the website and copy the temp auth code

Then do the below (https://cloud.gov/docs/deployment/deployment/)
cf target -o <ORG> -s <SPACE>
cf target -o hud-cloud-adoption -s dev
cf push <APPNAME>
cf push fheo
Command takes a while.




#### *Deploy a Docker image to ECR*

1. Navigate to the directory with the `Dockerfile` and build the Docker image from your Dockerfile:

    `run docker build -t <image_name>:<tag> .`

    e.g. `docker build -t faas-sandb/microservice:fheo .`
    
    where <image_name> follows this standard: "faas-sandb/microservice"
    
    and <tag> follows this standard: "fheo"

1. Run docker images to verify that the image was created correctly.

    `docker images --filter reference=<image_name>`

    e.g. `docker images --filter reference=faas-sandb/microservice`

1. The best way to find the commands to tag an image with the AWS name and deploy to ECR is to log in to the AWS front end, and choose "Amazon ECR -> Repositories" and click on the repository name (e.g. faas-sandb/microservice) at the top left is a button called "View push commands".  Click this.  It will bring up a list of commands.  Command #3 describes how to tag an image locally with the AWS name so you can push the image to the aws repository:

    `docker tag <image_name>:<version> <aws_accountID>.dkr.ecr.<region>.amazonaws.com/<image_name>:<version>`

    e.g. `docker tag faas-sandb/microservice:fheo <aws_accountID>.dkr.ecr.<region>.amazonaws.com/faas-sandb/microservice:fheo`

1. Step #4 from "view push commands": Run the following command to push this image to your AWS repository:
    `docker push <aws_accountID>.dkr.ecr.<region>.amazonaws.com/faas-sandb/microservice:fheo`

If you have not already, follow the instructions to set up connection to AWS prior to executing the push command to AWS.  Also note, re-authentication is required every 12 hours.  Step #1 under the ECR push commands shows the command to re-authenticate.  A sample command is below:

`aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_accountID>.dkr.ecr.<region>.amazonaws.com`


#### *Deploy a ECR image to EKS*

1. Test your configuration.

    `kubectl get svc`

1.  Undeploy (Turn off the existing replicas so a new deployment can occur)

    `kubectl scale deploy fheoservice --replicas=0`

1. Deploy

    `kubectl scale deploy fheoservice --replicas=1`


Other interesting kubectl commands

    `kubectl get deployments`
    `kubectl get pods`


### Set up connection to AWS

1. Download and install aws command line
1. Run aws configure, providing your access key id, and secret access key
1. Update your kubeconfig
    `aws eks --region us-gov-west-1 update-kubeconfig --name faas-sandb-agency01-eks`

1. Test your configuration.

    `kubectl get svc`


### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

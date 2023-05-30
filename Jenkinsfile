pipeline {
  agent any


  stages {

 stage('Install Dependencies') {
      steps {
        // Install Node.js and npm
        tool 'NodeJS'

        // Install project dependencies
        sh 'npm ci'
      }
    }

    stage('Build Project') {
      steps {
        // Build the Angular project
        sh 'npm run build'
      }
    }


  }

}



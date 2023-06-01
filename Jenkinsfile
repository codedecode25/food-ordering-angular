pipeline {
  agent any

tools {
    nodejs "Nodejs"
}
  stages {

 stage('Install Dependencies') {
      steps {

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



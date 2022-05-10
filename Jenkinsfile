pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Pull code from branch main') {
            steps {
                git branch: 'main', url: 'https://github.com/TeerapatEarth/Software-development-tools-and-environments-final-62070096.git'
            }
        }
        stage('unit-test') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Component testing') {
            steps {
                echo 'Component testing'
            }
        }
        stage('Packaging') {
            steps {
                echo 'Packaging'
            }
        }
        stage('Deploy to target server') {
            steps {
                echo 'Deploy to target server'
            }
        }
        stage('API/UI testing') {
            steps {
                echo 'API/UI testing'
            }
        }
    }
}

import java.text.SimpleDateFormat
podTemplate(label: 'blockly-pod', containers: [
    containerTemplate(name: 'python', image: 'python:2.7.13', ttyEnabled: true),
    containerTemplate(name: 'azcopy', image: 'glueckkanja/ci-deploy-linux-azcopy:1.4.1', ttyEnabled: true),
  ]) {
    node("blockly-pod"){
        def dateFormat = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss")
        def date = new Date()
        def output = dateFormat.format(date)

        def succ = true
        def err = ''
        try {
            stage("Build"){
                container("python"){
                    stage('Clone repository') {
                        checkout scm
                    }

                    stage("download deps"){
                        sh("cd .. && git clone https://github.com/google/closure-library.git")
                    }

                    stage("build"){
                        sh("python build.py")
                    }
                }
            }

            stage("Publish"){
                container("azcopy"){
                    sh("azcopy \
                        --source ./media \
                        --destination https://csdistg.blob.core.windows.net/blockly/${output}/media \
                        --dest-key vv2ZKUmod9oqdKBI7oWnMcPcd5HP0S6VIva8U9QQL/s6SLG1i55la6dKV7qLeMiX6FyxIQFTldGeyOeDCE7JsQ== \
                        --recursive")
                    sh("azcopy \
                        --source ./msg \
                        --destination https://csdistg.blob.core.windows.net/blockly/${output}/msg \
                        --dest-key vv2ZKUmod9oqdKBI7oWnMcPcd5HP0S6VIva8U9QQL/s6SLG1i55la6dKV7qLeMiX6FyxIQFTldGeyOeDCE7JsQ== \
                        --recursive")
                    sh("azcopy \
                        --source ./robMsg \
                        --destination https://csdistg.blob.core.windows.net/blockly/${output}/robMsg \
                        --dest-key vv2ZKUmod9oqdKBI7oWnMcPcd5HP0S6VIva8U9QQL/s6SLG1i55la6dKV7qLeMiX6FyxIQFTldGeyOeDCE7JsQ== \
                        --recursive")
                    sh("azcopy \
                        --source ./ \
                        --destination https://csdistg.blob.core.windows.net/blockly/${output}/ \
                        --dest-key vv2ZKUmod9oqdKBI7oWnMcPcd5HP0S6VIva8U9QQL/s6SLG1i55la6dKV7qLeMiX6FyxIQFTldGeyOeDCE7JsQ== \
                        --include \"*.js\"")
                }
            }
        } catch (error) {
            succ = false
            err = "error: ${error}"
        } finally {
            notifyStatus(succ, err)
        }
        
    }
}

def notifyStatus(success, error){
    def label = success? "SUCCESS":"FAILED"
    mail (to: 'tiantiaw@microsoft.com',
        subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) is ${label}",
        body: "msg: ${error}");
}
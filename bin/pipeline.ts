#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PipelineStack } from '../lib/pipeline-stack';
import { LambdaStack } from '../lib/lambda-stack';

const COMDECOMMIT_REPO_NAME = "pipeline";

const app = new cdk.App();

const lambdaStack = new LambdaStack(app, 'LambdaStack');
new PipelineStack(app, 'PipelineDeployingLambdaStack', {
    lambdaCode: lambdaStack.lambdaCode,
    repoName: COMDECOMMIT_REPO_NAME
});

app.synth();


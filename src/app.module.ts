import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServiceLeadModule } from './modules/service-lead/service-lead.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BffModule } from './bff/bff.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig, databaseConfig] }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('database.uri'),
        dbName: config.get<string>('database.name'),
      }),
    }),
    ServiceLeadModule,
    BffModule,
  ],
})
export class AppModule {}
